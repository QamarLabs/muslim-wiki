export interface WikiPage {
  id: string;
  title: string;
  pageid: number;
  revid: number;
  url: string;
  text: string;
  summary: string;
  word_count: number;
  timestamp: any;
}

export interface ListResults<T> {
  results: T[];
}