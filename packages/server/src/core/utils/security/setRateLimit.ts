import { ForbiddenException } from '@nestjs/common';

import { redis } from '../../resources/Redis/redis';
import { Context } from '../types';

export interface SetRateLimiterOptions {
  context: Context;
  variableValues: {
    [variableName: string]: any;
  };
  fieldName: string;
  max: number;
  windowMs: number;
  limitByVariables: boolean;
  errorMessage: string;
}

export const setRateLimit = async ({
  context,
  variableValues,
  fieldName,
  max,
  windowMs,
  limitByVariables,
  errorMessage,
}: SetRateLimiterOptions) => {
  const visitorKey =
    context.req.session && context.req.session.userId
      ? 'user:' + context.req.session.userId
      : 'ip:' + context.req.ip;

  const variableKey =
    limitByVariables &&
    JSON.stringify(variableValues)
      .replace(/[^a-zA-Z0-9,]/g, '')
      .trim();
  const key: string = ['limit', fieldName, variableKey, visitorKey].join(':');
  const oldRecord = await redis.get(key);
  if (oldRecord) {
    if (parseInt(oldRecord) > max) {
      throw new ForbiddenException(errorMessage);
    } else {
      await redis.incr(key);
    }
  } else {
    await redis.set(key, '1', 'EX', windowMs);
  }
};
