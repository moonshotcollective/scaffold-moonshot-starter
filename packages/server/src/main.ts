import { config as dotenvConfig } from 'dotenv';
dotenvConfig();
import { NestFactory } from '@nestjs/core';
// import cookieParser from 'cookie-parser';
// import { NextFunction } from 'express';

import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { sessionMiddleware } from './core/resources/Redis/redis';
import {
  BadRequestException,
  Logger,
  ValidationError,
  ValidationPipe,
} from '@nestjs/common';
import config from './core/configs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';
import { SwaggerConfig } from './core/configs/config.interface';

const {
  api: { protocol, hostname, port, corsOptions },
} = config();

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    bodyParser: true,
    cors: false,
  });

  app.enableCors(corsOptions);
  app.disable('x-powered-by');

  // if we add cloudflare on a proxy
  // app.set('trust proxy', 1); // trust first proxy
  app.enableShutdownHooks(['SIGINT', 'SIGTERM']);

  app.use(sessionMiddleware);

  const configService = app.get(ConfigService);
  const swaggerConfig = configService.get<SwaggerConfig>('swagger');

  // Swagger Api
  if (swaggerConfig?.enabled) {
    const options = new DocumentBuilder()
      .setTitle(swaggerConfig.title || 'Nestjs')
      .setDescription(swaggerConfig.description || 'The nestjs API description')
      .setVersion(swaggerConfig.version || '1.0')
      .build();
    const document = SwaggerModule.createDocument(app, options);

    SwaggerModule.setup(swaggerConfig.path || 'api', app, document);
  }

  app.useGlobalPipes(
    new ValidationPipe({
      validationError: {
        target: false,
        value: true,
      },
      exceptionFactory: (errors: ValidationError[]) =>
        new BadRequestException(errors),
      forbidNonWhitelisted: true,
    }),
  );
  await app.listen(port, () => {
    Logger.log(`${protocol()}://${hostname}/health`, 'REST API');
    Logger.log(`${protocol()}://${hostname}/graphql`, 'GraphQL API');
  });
}
bootstrap();
