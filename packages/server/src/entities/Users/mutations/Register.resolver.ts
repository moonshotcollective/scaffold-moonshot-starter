import { Resolver, Mutation, Args, Context } from '@nestjs/graphql';
import { BadRequestException, Inject } from '@nestjs/common';
import { RedisPubSub } from 'graphql-redis-subscriptions';

import { Context as ContextType } from '../../../core/utils/types';
import config from '../../../core/configs/config';
import { PUB_SUB } from '../../../core/constants/redis';
// import { RateLimiterGuard } from '../../../core/middlewares/guards/RateLimiterGuard.guard';
// import { RateLimitOptions } from '../../../core/decorators/RateLimitOptions.decorator';
import { User } from '../User.entity';
import { ErrorTypes, SiweMessage } from '../../../core/libs/siwe/client';
import { SiweRegisterInput } from '../dto/RegisterInput';
import { providers } from 'ethers';
import { getInfuraUrl } from '../../../core/utils/helpers/networks';
import { ApolloError } from 'apollo-server-errors';

const {
  api: { port, hostname, protocol },
  infuraKey,
} = config();
@Resolver()
export class RegisterResolver {
  constructor(
    @Inject(PUB_SUB)
    private readonly pubSub: RedisPubSub,
  ) {}
  // @RateLimitOptions({
  //   // 1 day expiration
  //   windowMs: 60 * 60 * 1000 * 24,
  //   max: rateLimits?.register || 1,
  //   limitByVariables: false,
  //   errorMessage: 'security.rateLimitExceeded.register',
  // })
  // @UseGuards(RateLimiterGuard)
  @Mutation(() => User || null, {
    description: 'Registers a new user and notifies the connected clients',
  })
  async register(
    @Context() ctx: ContextType,
    @Args('input')
    { ens, message }: SiweRegisterInput,
  ): Promise<User | null> {
    try {
      if (!message || !message.address) {
        throw new BadRequestException({
          message: 'Expected siwe object as input',
        });
      }
      const siweMsg = new SiweMessage(message);

      const infuraProvider = new providers.JsonRpcProvider(
        {
          allowGzip: true,
          url: `${getInfuraUrl(siweMsg.chainId)}/${infuraKey}`,
          headers: {
            Accept: '*/*',
            Origin: `${protocol}://${hostname}:${port}`,
            'Accept-Encoding': 'gzip, deflate, br',
            'Content-Type': 'application/json',
          },
        },
        Number.parseInt(siweMsg.chainId),
      );
      await infuraProvider.ready;

      const fields = await siweMsg.validate(infuraProvider);

      if (fields.nonce !== ctx.req.session.nonce) {
        throw new BadRequestException({
          message: 'Invalid nonce.',
        });
      }

      ctx.req.session.siwe = fields;
      ctx.req.session.ens = ens;
      ctx.req.session.nonce = null;
      if (!fields.expirationTime) {
        throw new BadRequestException({
          message: 'Expecting a valid date format for expirationTime',
        });
      }
      ctx.req.session.cookie.expires = new Date(fields.expirationTime);
      await ctx.req.session.save();
      await this.pubSub.publish('userAdded', {
        userAdded: ctx.req.session.siwe.address,
      });
      return {
        address: ctx.req.session.siwe.address,
        ens: ctx.req.session.ens,
      };
    } catch (error) {
      ctx.req.session.siwe = null;
      ctx.req.session.nonce = null;
      ctx.req.session.ens = null;
      switch (error) {
        case ErrorTypes.EXPIRED_MESSAGE: {
          ctx.req.session.save(() => {
            throw new ApolloError(error.message, '440');
          });
          break;
        }
        case ErrorTypes.INVALID_SIGNATURE: {
          ctx.req.session.save(() => {
            throw new ApolloError(error.message, '422');
          });
          break;
        }
        default: {
          ctx.req.session.save(() => {
            throw new ApolloError(error.message, '500');
          });
          break;
        }
      }
      return null;
    }
  }
}
