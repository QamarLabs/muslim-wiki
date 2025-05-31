
export class CreateArticleRequestDto {
  title: string;

  pageid: number;

  revid: number;

  url: string;

  text: string;

  summary?: string;

  word_count: number;

  timestamp: Date;
}