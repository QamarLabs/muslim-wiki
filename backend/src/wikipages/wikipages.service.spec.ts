import { Test, TestingModule } from '@nestjs/testing';
import { WikipagesService } from './wikipages.service';

describe('WikipagesService', () => {
  let service: WikipagesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WikipagesService],
    }).compile();

    service = module.get<WikipagesService>(WikipagesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
