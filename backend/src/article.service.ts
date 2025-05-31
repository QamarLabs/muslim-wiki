import { Injectable } from '@nestjs/common';
import { ListResults, WikiPage } from './models/article';
import { InjectModel } from '@nestjs/mongoose';
import { Article } from './schemas/article.schema';
import { Model } from 'mongoose';

@Injectable()
export class ArticleService {
  constructor(@InjectModel(Article.name) private articleModel: Model<Article>) {}


  getHello(): string {
    return 'Hello World!';
  }

  async searchArticles(
    qry: string,
    page: number = 1,
    limit: number = 10
  ): Promise<{ results: Article[]; total: number }> {
    const query = { title: { $regex: qry, $options: 'i' } };
    
    const [results, total] = await Promise.all([
      this.articleModel
        .find(query)
        .skip((page - 1) * limit)
        .limit(limit)
        .exec(),
      this.articleModel.countDocuments(query).exec(),
    ]);

    return { results, total };
  }

  async getRecentArticles(): Promise<ListResults<WikiPage>> {
    const exampleWikiPage: WikiPage = {
      id: 'Test id 12345',
      title: 'Test Wiki Page',
      pageid: 123,
      revid: 212,
      url: 'test url...',
      text: 'test text for the wiki page',
      summary: 'summry',
      word_count: 10,
      timestamp: new Date().toLocaleString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      }),
    };


    return {
      results: [exampleWikiPage],
    };
  }
}
