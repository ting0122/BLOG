import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Body, Query, Redirect } from '@nestjs/common/decorators';
import { CreateNewsDto } from './dtos/create-news.dto';
import { BlogsService } from './blogs.service';
import { DataSource } from 'typeorm';
import { news } from './entity/news';

@Controller('blogs')
export class BlogsController {
    constructor(private blogsService : BlogsService){}

    @Get()
    findOne(@Param('id') id:number){
        console.log(id);
        return this.blogsService.findNews(id);
    }

    @Post()
    async create(@Body() createNewsDto : CreateNewsDto) {
         return this.blogsService.createNews(createNewsDto);
    }

    @Put(':id')
    update(): string {
        return 'you want to update something';
    }

    @Delete(':id')
    remove(): string {
        return 'you want to remove something';
    }

}
