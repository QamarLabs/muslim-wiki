import { Injectable } from '@nestjs/common';
import { WikiPage } from './models/article';

@Injectable()
export class ArticleService {
  getHello(): string {
    return 'Hello World!';
  }

  async getRecentArticles(): Promise<ListResults<WikiPage>> {
    const exampleWikiPage = {
      id: 'Test id 12345',
      title: 'Test Wiki Page',
      pageid: 'PageId',
      revid: 'test rev id',
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
