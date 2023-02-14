import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { Users } from './entity/users';
import { blogMiddleware } from 'src/middle/blog.middleware';

@Module({
    imports : [TypeOrmModule.forFeature([Users])],
    providers : [UsersService],
    controllers : [UsersController]
})
export class UsersModule {} 

