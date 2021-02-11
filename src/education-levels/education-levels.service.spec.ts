import { Test, TestingModule } from '@nestjs/testing';
import { EducationLevelsService } from './education-levels.service';
import { EducationLevelsController } from '../education-levels/education-levels.controller'
import { TypeOrmModule } from '@nestjs/typeorm';
import { EducationLevel } from './entities/education-level.entity';
import { createTestConfiguration } from '../database/database.db';

describe('EducationLevelsService', () => {
  let service: EducationLevelsService;
  let serviceTest: TestingModule;
  beforeEach(async () => {
    serviceTest = await Test.createTestingModule({
      imports: [TypeOrmModule.forFeature([EducationLevel]),
      TypeOrmModule.forRoot(createTestConfiguration([EducationLevel]))],
      controllers: [EducationLevelsController],
      providers: [EducationLevelsService,],
    }).compile();
    afterEach(async () => {
      await serviceTest.close()
    })
    service = serviceTest.get<EducationLevelsService>(EducationLevelsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
