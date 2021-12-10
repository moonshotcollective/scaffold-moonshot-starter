import { Resolver, Mutation, Args, Context } from '@nestjs/graphql';
import {
  BadRequestException,
  Inject,
  UnauthorizedException,
} from '@nestjs/common';

import { Context as ContextType } from '../../../core/utils/types';
import { SiweMessageInput } from '../dto/SiweMessageInput';
import { PUB_SUB } from '../../../core/constants/redis';
import { RedisPubSub } from 'graphql-redis-subscriptions';

@Resolver()
export class SignOutResolver {
  constructor(
    @Inject(PUB_SUB)
    private readonly pubSub: RedisPubSub,
  ) {}

  @Mutation(() => Boolean, {
    description: 'Logs out a user an notifies the connected clients',
  })
  async signOut(
    @Context() ctx: ContextType,
    @Args('input')
    message: SiweMessageInput,
  ): Promise<boolean> {
    if (!ctx.req.session || !ctx.req.session.siwe) {
      throw new UnauthorizedException('Expected to be signed in first');
    }
    if (!message || !message.address) {
      throw new BadRequestException({
        message: 'Expected siwe object as input',
      });
    }
    let isDestroyed = false;
    ctx.req.session.destroy(() => {
      isDestroyed = true;
    });
    await this.pubSub.publish('userSignedOut', {
      userSignedOut: message.address,
    });
    return isDestroyed;
  }
}
