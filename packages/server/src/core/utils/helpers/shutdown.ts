import { redis, pubSub } from '../../resources/Redis/redis';
import { Logger } from '@nestjs/common';

export const disconnect = async () => {
  Logger.warn('Disconnecting...');
  pubSub.close();
  return redis.disconnect();
};

// export const setupErrorHandling = (closeApp: INestApplication['close']) => {
//   process.on('uncaughtException', err => {
//     Logger.error(err, 'Uncaught Exception');
//     return shutdown(closeApp);
//   });
//   process.on('unhandledRejection', err => {
//     Logger.error(err, 'Uncaught Rejection');
//     return shutdown(closeApp);
//   });
// };
