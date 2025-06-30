import { Test, TestingModule } from '@nestjs/testing';
import { WikipagerequestsService } from './wikipagerequests.service';

describe('WikipagerequestsService', () => {
  let service: WikipagerequestsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WikipagerequestsService],
    }).compile();

    service = module.get<WikipagerequestsService>(WikipagerequestsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
