import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { BlogsController } from './blogs.controller';
import { BlogsService } from './blogs.service';
import { news } from './entity/news';
import { TypeOrmModule } from '@nestjs/typeorm';
import { blogMiddleware } from 'src/middle/blog.middleware';


@Module({
    imports : [TypeOrmModule.forFeature([news])],
    controllers:[BlogsController],
    providers : [BlogsService]
})
export class BlogsModule {}
