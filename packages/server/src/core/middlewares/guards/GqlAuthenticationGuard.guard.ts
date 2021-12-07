import {
  ExecutionContext,
  Injectable,
  CanActivate,
  UnauthorizedException,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

@Injectable()
export class GqlAuthenticationGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const ctx = GqlExecutionContext.create(context);
    const {
      operation: { operation },
    } = ctx.getInfo();

    const currentUserId =
      operation === 'subscription'
        ? ctx.getContext().connection.context.req.session?.userId
        : ctx.getContext().req.session?.userId;

    if (!currentUserId) {
      throw new UnauthorizedException();
    }

    return true;
  }
}
