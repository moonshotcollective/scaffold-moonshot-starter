import Redis from 'ioredis';
import session from 'express-session';
import connectRedis from 'connect-redis';
import { RedisPubSub } from 'graphql-redis-subscriptions';
import config from '../../configs/config';

const { redisConfig, sessionOptions, redisAuthConfig } = config();

export const authRedis = new Redis({ ...redisAuthConfig });
export const redis = new Redis({ ...redisConfig });

// create Redis-based pub-sub
export const pubSub = new RedisPubSub({
  publisher: new Redis({ ...redisConfig }),
  subscriber: new Redis({ ...redisConfig }),
});

const RedisStore = connectRedis(session);

export const sessionMiddleware = session({
  store: new RedisStore({
    client: authRedis,
  }),
  ...sessionOptions,
});
