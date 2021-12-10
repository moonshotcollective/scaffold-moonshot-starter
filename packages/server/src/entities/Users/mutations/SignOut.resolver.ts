import { Resolver, Mutation, Context } from '@nestjs/graphql';
import { Inject, UnauthorizedException } from '@nestjs/common';

import { Context as ContextType } from '../../../core/utils/types';
import { PUB_SUB } from '../../../core/constants/redis';
import { RedisPubSub } from 'graphql-redis-subscriptions';
import config from '../../../core/configs/config';

const {
  sessionOptions: {
    name,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    cookie: { maxAge, ...cookieOptions },
  },
} = config();
@Resolver()
export class SignOutResolver {
  constructor(
    @Inject(PUB_SUB)
    private readonly pubSub: RedisPubSub,
  ) {}

  @Mutation(() => Boolean, {
    description: 'Logs out a user an notifies the connected clients',
  })
  async signOut(@Context() ctx: ContextType): Promise<boolean> {
    if (!ctx.req.session) {
      throw new UnauthorizedException('Expected to be signed in first');
    }

    const loggedOutAddress = ctx.req.session.siwe?.address;
    await this.pubSub.publish('userSignedOut', {
      userSignedOut: loggedOutAddress,
    });

    return new Promise<boolean>((resolve, reject) =>
      ctx.req.session.destroy((err) => {
        if (err) {
          reject(err);
        }

        ctx.res.clearCookie(name, cookieOptions);
        resolve(true);
      }),
    );
  }
}
