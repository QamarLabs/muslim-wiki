import { Controller, Get, Param } from '@nestjs/common';
import { WikipagesService } from './wikipages.service';

@Controller('wikipages')
export class WikipagesController {
    constructor(
        private readonly wikipagesService: WikipagesService) { }


    @Get(':pageId')
    getWikiPage(@Param('pageId') pageId: string) {
        return this.wikipagesService.getWikiPage(pageId);
    }
}
