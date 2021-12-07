import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

export const UseCeramic = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const gqlCtx = GqlExecutionContext.create(ctx).getContext();
    return {
      ceramicClient: gqlCtx.req.ceramicClient,
      ceramicCore: gqlCtx.req.ceramicCore,
    };
  },
);
