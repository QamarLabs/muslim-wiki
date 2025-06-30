import { Test, TestingModule } from '@nestjs/testing';
import { WikipagesController } from './wikipages.controller';

describe('WikipagesController', () => {
  let controller: WikipagesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WikipagesController],
    }).compile();

    controller = module.get<WikipagesController>(WikipagesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
