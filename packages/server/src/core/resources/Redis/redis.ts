import Redis from 'ioredis';
import { RedisPubSub } from 'graphql-redis-subscriptions';
import config from '../../configs/config';

const { redisConfig } = config();

export const redis = new Redis({ ...redisConfig });

// create Redis-based pub-sub
export const pubSub = new RedisPubSub({
  publisher: new Redis({ ...redisConfig }),
  subscriber: new Redis({ ...redisConfig }),
});
