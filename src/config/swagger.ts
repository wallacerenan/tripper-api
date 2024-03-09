import { DocumentBuilder } from '@nestjs/swagger';

export const PORT = Number(process.env.APP_PORT ?? 3333);
export const ENV = process.env.NODE_ENV ?? 'development';
export const APP_NAME = process.env.APP_NAME ?? 'tripper-api';
export const APP_VERSION = process.env.APP_VERSION ?? '1.0.0';

export const swaggerConfig = new DocumentBuilder()
  .setTitle(APP_NAME)
  .setDescription(`The ${APP_NAME} API description`)
  .setVersion(APP_VERSION)
  .build();
