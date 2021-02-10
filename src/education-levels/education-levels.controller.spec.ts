import { Test, TestingModule } from '@nestjs/testing';
import { EducationLevelsController } from './education-levels.controller';
import { EducationLevelsService } from './education-levels.service';
import { DatabaseModule } from '../database/database.module'
import { educationLevelProviders } from '../education-levels/providers/education-level.providers'
import { CreateEducationLevelDto } from './dto/create-education-level.dto';



describe('EducationLevelsController', () => {
  let educationLevelController: EducationLevelsController;
  let db: EducationLevelsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [DatabaseModule],
      controllers: [EducationLevelsController],
      providers: [EducationLevelsService,
        ...educationLevelProviders],
    }).compile();
    educationLevelController = module.get<EducationLevelsController>(EducationLevelsController);
    db = module.get<EducationLevelsController>(EducationLevelsController)
  });

  afterEach(async () => {
    db.cleanAll()
  })

  it('should be defined', async () => {
    const result = new CreateEducationLevelDto();
    result.name = "ramita"

    const response = await educationLevelController.create(result)
    expect(educationLevelController).toBeDefined();

    delete response.data.id
    expect(response).toEqual({
      data: {
        name: "ramita"
      }
    })
  });
});
