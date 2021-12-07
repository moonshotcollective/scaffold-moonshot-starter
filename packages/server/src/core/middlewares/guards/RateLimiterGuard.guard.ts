import { ExecutionContext, Injectable, CanActivate } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Reflector } from '@nestjs/core';

import { setRateLimit } from '../../utils/security/setRateLimit';
import { RateLimitOptionsType } from '../../utils/types';

@Injectable()
export class RateLimiterGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const ctx = GqlExecutionContext.create(context);
    const { variableValues, fieldName } = ctx.getInfo();
    const gqlContext = ctx.getContext();
    const { max, windowMs, limitByVariables, errorMessage } =
      this.reflector.get<RateLimitOptionsType>(
        'rateLimitOptions',
        context.getHandler(),
      );
    if (fieldName === 'login') {
      return true;
    }
    try {
      await setRateLimit({
        context: gqlContext,
        variableValues,
        fieldName,
        max,
        windowMs,
        limitByVariables,
        errorMessage,
      });
      return true;
    } catch (error) {
      return false;
    }
  }
}
