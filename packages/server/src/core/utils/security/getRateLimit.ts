import { redis } from '../../resources/Redis/redis';
import { TooManyRequestsException } from '../errors/TooManyRequestsException.error';
import { Context } from '../types';

export interface GetRateLimiterOptions {
  context: Context;
  variableValues: {
    [variableName: string]: any;
  };
  fieldName: string;
  max: number;
  limitByVariables: boolean;
  errorMessage: string;
}

export const getRateLimit = async ({
  context,
  variableValues,
  fieldName,
  max,
  limitByVariables,
  errorMessage,
}: GetRateLimiterOptions) => {
  const visitorKey =
    context.req.session && context.req.session.siwe
      ? 'address:' + context.req.session.siwe.address
      : 'ip:' + context.req.ip;

  const variableKey =
    limitByVariables &&
    JSON.stringify(variableValues)
      .replace(/[^a-zA-Z0-9,]/g, '')
      .trim();
  const key: string = ['limit', fieldName, variableKey, visitorKey].join(':');
  try {
    const oldRecord = await redis.get(key);
    if (oldRecord) {
      if (parseInt(oldRecord) > max) {
        throw new TooManyRequestsException(errorMessage);
      }
    }
  } catch (error) {
    throw error;
  }
};
