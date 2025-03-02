import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    })
  );

  const PORT = process.env.PORT ?? 3000;
  //si existe la variable de entorno PORT en .env le asignara
  //ese valor del puerto sino tomara el valor 3000
  console.log('App corriendo en puerto Correctamente')
  console.log(`App corriendo en puerto: ${ PORT } `)

  await app.listen( PORT );
}
bootstrap();
