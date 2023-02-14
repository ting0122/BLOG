import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogsModule } from './blogs/blogs.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './users/entity/users';
import { UsersModule } from './users/users.module';
import { news } from './blogs/entity/news';
import { blogMiddleware } from './middle/blog.middleware';
import { BlogsController } from './blogs/blogs.controller';

@Module({
  imports: 
  [ BlogsModule, 
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'mydb',
      entities: [news,Users],
      synchronize: true,
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer){
    consumer
        .apply(blogMiddleware)
        .forRoutes(BlogsController)
  }
}
