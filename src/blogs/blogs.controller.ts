import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Body, Query, Redirect } from '@nestjs/common/decorators';
import { CreateNewsDto } from './dtos/create-news.dto';
import { BlogsService } from './blogs.service';

@Controller('blogs')
export class BlogsController {
    constructor(private blogsService : BlogsService){}

    @Get()
    findAll(): string {
        return 'you want to find something';
    }

    @Get(':id')
    findOne(@Query('yourname') yourname:string){
        return `you want to find ${yourname}`;
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
