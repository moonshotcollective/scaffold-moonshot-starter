/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Config } from './config.interface';

const config: Config = {
  nest: {
    port: 5000,
  },
  infuraKey: process.env.INFURA_ID!,
  ceramic: {
    apiUrl: process.env.CERAMIC_API_URL!,
    seed: process.env.CERAMIC_SEED!,
    forceSync: JSON.parse(process.env.CERAMIC_FORCE_SYNC!),
  },
  cors: {
    enabled: true,
  },
  swagger: {
    enabled: true,
    title: 'scaffold-api',
    description: 'REST endpoints of the Scaffold API',
    version: '1.5',
    path: 'api',
  },
  graphql: {
    playgroundEnabled: true,
    debug: true,
    schemaDestination: './src/schema.graphql',
    sortSchema: true,
  },
  security: {
    expiresIn: '2m',
    refreshIn: '7d',
    bcryptSaltOrRound: 10,
  },
  api: {
    apiKey: process.env.API_KEY!,
    environment: process.env.NODE_ENV!,
    hostname: `${process.env.API_HOST}:${process.env.API_PORT}`,
    confirmationTokenExpiration: parseInt(
      process.env.CONFIRMATION_TOKEN_EXPIRATION || '120',
      10,
    ),
    tracing: false,
    port: process.env.API_PORT!,
    logLevel: process.env.LOG_LEVEL!,
    protocol: function () {
      return `http${process.env.NODE_ENV! === 'development' ? '' : 's'}`;
    },
    corsOptions: {
      credentials: true,
      origin: function (origin, callback) {
        const validPatternRegexes = [
          /^(.*).coordination.party(\/(.*)|)$/,
          /^(www.|)coordination.party(\/(.*)|)$/,
          /^http:\/\/localhost:[0-9]{4}$/,
        ];
        if (validPatternRegexes.some((rx) => rx.test(origin)) || !origin) {
          callback(null, true);
        } else {
          callback(new Error('Not allowed by CORS'));
        }
      },
    },
    // rateLimits: {
    //   register: 5,
    // },
  },
  apolloServerOptions: {
    tracing: true,
    introspection: true,
    playground: true,
  },
  app: {
    url: process.env.REACT_APP_URL!,
  },
  redisConfig: {
    port: +process.env.REDIS_PORT!,
    host: process.env.REDIS_HOST,
    password: process.env.REDIS_PASSWORD,
    connectTimeout: 15000,
    enableReadyCheck: true,
    showFriendlyErrorStack: true,
    autoResubscribe: true,
  },
  redisAuthConfig: {
    port: +process.env.AUTH_REDIS_PORT!,
    host: process.env.AUTH_REDIS_HOST,
    password: process.env.AUTH_REDIS_PASSWORD,
    connectTimeout: 15000,
    enableReadyCheck: true,
    showFriendlyErrorStack: true,
    autoResubscribe: true,
  },
  sessionOptions: {
    name: process.env.COOKIE_NAME!,
    secret: process.env.COOKIE_SECRET!,
    resave: true,
    saveUninitialized: true,
    unset: 'destroy',
    cookie: {
      secure: JSON.parse(process.env.IS_SECURE_COOKIE!), // casting the string to a boolean
      httpOnly: true,
      sameSite: 'lax',
      path: '/',
      maxAge: 144 * 60 * 60 * 1000, // 6 days
    },
  },
};

export default (): Config => config;
