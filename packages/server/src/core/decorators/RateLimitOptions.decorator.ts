import { SetMetadata } from '@nestjs/common';
import { RateLimitOptionsType } from '../utils/types';

export const RateLimitOptions = (options: RateLimitOptionsType) =>
  SetMetadata('rateLimitOptions', options);
