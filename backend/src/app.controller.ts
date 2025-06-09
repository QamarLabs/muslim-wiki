import { Body, Controller, Delete, Get, Param, Post, Put, Query, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { ArticleService } from './article.service';
import { Response } from 'express';
import { ArticleRequestService } from './articlerequest.service';
import { UpdateArticleRequestDto } from './dtos/update-article-request.dto';
import { CreateArticleRequestDto } from './dtos/create-article-request.dto';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly articleService: ArticleService,
    private readonly articleRequestsService: ArticleRequestService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('hello')
  async getHelloWithName(@Query('name') name: string, @Res() res: Response) {
    const response = await this.appService.getHelloWithName(name);
    res.json(response);
  }


  @Get('searchArticles')
  async getSearchArticles(
    @Query('qry') qry: string,
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
    @Res() res: Response) {
    const { results } = await this.articleService.searchArticles(qry, page, limit);
    res.json({
      results,
      status: 200,
    });
  }

  @Get('recentArticles')
  async getRecentArticles(@Res() res: Response) {
    const { results } = await this.articleService.getRecentArticles();
    res.json({
      results,
      status: 200,
    });
  }
  

  @Post()
  create(@Body() createArticleRequestDto: CreateArticleRequestDto) {
    return this.articleRequestsService.create(createArticleRequestDto);
  }
  
  @Put(':id')
  update(@Param('id') id: string, @Body() updateArticleRequestDto: UpdateArticleRequestDto) {
    return this.articleRequestsService.update(id, updateArticleRequestDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.articleRequestsService.remove(id);
  }
}
