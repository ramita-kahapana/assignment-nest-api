import { Test, TestingModule } from '@nestjs/testing';
import { EducationLevelController } from './education-level.controller';

describe('EducationLevelController', () => {
  let controller: EducationLevelController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EducationLevelController],
    }).compile();

    controller = module.get<EducationLevelController>(EducationLevelController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
