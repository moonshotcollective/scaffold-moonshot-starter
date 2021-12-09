import { PUB_SUB } from '../../constants/redis';
import { pubSub } from './redis';

export const redisProviders = [
  {
    provide: PUB_SUB,
    useValue: pubSub,
  },
];
