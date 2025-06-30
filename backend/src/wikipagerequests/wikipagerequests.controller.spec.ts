import { Test, TestingModule } from '@nestjs/testing';
import { WikipagerequestsController } from './wikipagerequests.controller';

describe('WikipagerequestsController', () => {
  let controller: WikipagerequestsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WikipagerequestsController],
    }).compile();

    controller = module.get<WikipagerequestsController>(WikipagerequestsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
