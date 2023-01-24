import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/users.entity';
import { Repository } from 'typeorm';
import { CreateNewsDto } from './dtos/create-news.dto';
import { news } from './entity/news';

@Injectable()
export class BlogsService {
    constructor(
        @InjectRepository(news)
        private blogsRepository : Repository<news>,
    ){}

    async findNews(Id){
        return this.blogsRepository.findOneBy(Id);
    }

    async createNews(createNewsDto : CreateNewsDto) : Promise<news> {
        return this.blogsRepository.save(createNewsDto);
    }

}
