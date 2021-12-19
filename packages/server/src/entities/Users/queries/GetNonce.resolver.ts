import { Resolver, Query, Context } from '@nestjs/graphql';
import { generateNonce } from '../../../core/libs/siwe/client';
import { Context as ContextType } from '../../../core/utils/types';

@Resolver(() => String)
export class GetNonceResolver {
  @Query(() => String, {
    nullable: true,
    description: 'Gets a nonce',
    name: 'getNonce',
  })
  async getNonce(@Context() ctx: ContextType): Promise<string> {
    // Get the data from your favorite data store
    const nonce = generateNonce();
    ctx.req.session.nonce = nonce;
    await ctx.req.session.save();
    return nonce;
  }
}
