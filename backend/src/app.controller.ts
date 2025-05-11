import { Controller, Get, Query, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { ArticleService } from './article.service';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly articleService ArticleService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('hello')
  async getHelloWithName(@Query('name') name: string, @Res() res: Response) {
    const response = await this.appService.getHelloWithName(name);
    res.json(response);
  }

  @Get('recentArticles')
  async getRecentArticles(@Res() res: Response) {
    const { results } = await this.articleService.getRecentArticles();
    res.json({
      results,
      status: 200,
    });
  }
}
