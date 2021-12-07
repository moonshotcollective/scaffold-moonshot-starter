import {
  ExecutionContext,
  CallHandler,
  NestInterceptor,
  Injectable,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Reflector } from '@nestjs/core';

import { setRateLimit } from '../../utils/security/setRateLimit';
import { getRateLimit } from '../../utils/security/getRateLimit';
import { RateLimitOptionsType } from '../../utils/types';

@Injectable()
export class LoginRateLimitInterceptor implements NestInterceptor {
  constructor(private readonly reflector: Reflector) {}

  async intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Promise<Observable<any>> {
    const ctx = GqlExecutionContext.create(context);
    const gqlContext = ctx.getContext();
    const { variableValues, fieldName } = ctx.getArgs();
    const { max, windowMs, limitByVariables, errorMessage } =
      this.reflector.get<RateLimitOptionsType>(
        'rateLimitOptions',
        context.getHandler(),
      );
    await getRateLimit({
      context: gqlContext,
      variableValues,
      fieldName,
      max,
      limitByVariables,
      errorMessage,
    });
    return next.handle().pipe(
      tap(async (error: any) => {
        if (
          error.message === 'wrong.loginCredentials' ||
          error.message === 'wrong.oauthAuthentication'
        ) {
          try {
            return setRateLimit({
              context: gqlContext,
              variableValues,
              fieldName,
              max,
              windowMs,
              limitByVariables,
              errorMessage,
            });
          } catch (err) {
            return err;
          }
        }
        return error;
      }),
    );
  }
}
