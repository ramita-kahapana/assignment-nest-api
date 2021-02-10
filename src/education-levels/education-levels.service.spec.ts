import { Test, TestingModule } from '@nestjs/testing';
import { EducationLevelsService } from './education-levels.service';
import { DatabaseModule } from '../database/database.module'
import { EducationLevelsController } from '../education-levels/education-levels.controller'
import { educationLevelProviders } from '../education-levels/providers/education-level.providers'

describe('EducationLevelsService', () => {
  let service: EducationLevelsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [DatabaseModule],
      controllers: [EducationLevelsController],
      providers: [EducationLevelsService,
        ...educationLevelProviders],
    }).compile();

    service = module.get<EducationLevelsService>(EducationLevelsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});


