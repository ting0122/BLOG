import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import * as cookieParser from 'cookie-parser';
import * as session from 'express-session';


async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useStaticAssets(join(__dirname,'..','public'));
  app.setBaseViewsDir(join(__dirname,'..','views'));
  app.setViewEngine('hbs');

  //cookies
  app.use(cookieParser());
  //session
  app.use(session({
      secret:'my_secret',
      resave: false ,
      saveUninitialized: false,
      cookie:{maxAge:600*1000},
    }),
  );

  await app.listen(3000);
}
bootstrap();
