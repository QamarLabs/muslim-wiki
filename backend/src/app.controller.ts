import {  Controller, Get, Query, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('hello')
  async getHelloWithName(@Query('name') name: string, @Res() res: Response) {
    const response = await this.appService.getHelloWithName(name);
    res.json(response);
  }


  // @Get('searchArticles')
  // async getSearchArticles(
  //   @Query('qry') qry: string,
  //   @Query('page') page: number = 1,
  //   @Query('limit') limit: number = 10,
  //   @Res() res: Response) {
  //   const { results } = await this.articleService.searchArticles(qry, page, limit);
  //   res.json({
  //     results,
  //     status: 200,
  //   });
  // }

  // @Get('recentArticles')
  // async getRecentArticles(@Res() res: Response) {
  //   const { results } = await this.articleService.getRecentArticles();
  //   res.json({
  //     results,
  //     status: 200,
  //   });
  // }

}
