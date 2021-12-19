import { UnauthorizedException } from '@nestjs/common';
import { Resolver, Query, Context } from '@nestjs/graphql';
import { Context as ContextType } from '../../../core/utils/types';

import { User } from '../User.entity';

@Resolver(() => User)
export class MeResolver {
  @Query(() => User, {
    nullable: true,
    description: 'Gets the currently logged in user',
    name: 'me',
  })
  async me(@Context() ctx: ContextType): Promise<User | undefined> {
    if (!ctx.req.session.siwe) {
      throw new UnauthorizedException({ message: 'You have to first sign_in' });
    }

    return {
      address: ctx.req.session.siwe.address,
      ens: ctx.req.session.ens ?? undefined,
    };
  }
}
