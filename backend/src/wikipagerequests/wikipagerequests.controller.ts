import { Body, Controller, Delete, Param, Post, Put } from '@nestjs/common';
import { CreateArticleRequestDto } from 'src/dtos/create-article-request.dto';
import { UpdateArticleRequestDto } from 'src/dtos/update-article-request.dto';
import { WikipagerequestsService } from './wikipagerequests.service';

@Controller('wikipagerequests')
export class WikipagerequestsController {
    constructor(private readonly wikipageRequestsService: WikipagerequestsService) { }

    @Post()
    create(@Body() createArticleRequestDto: CreateArticleRequestDto) {
        return this.wikipageRequestsService.create(createArticleRequestDto);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateArticleRequestDto: UpdateArticleRequestDto) {
        return this.wikipageRequestsService.update(id, updateArticleRequestDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.wikipageRequestsService.remove(id);
    }

}
