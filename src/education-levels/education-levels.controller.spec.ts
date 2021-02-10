import { Test, TestingModule } from '@nestjs/testing';
import { EducationLevelsController } from './education-levels.controller';
import { EducationLevelsService } from './education-levels.service';
import { DatabaseModule } from '../database/database.module'
import { educationLevelProviders } from '../education-levels/providers/education-level.providers'
import { CreateEducationLevelDto } from './dto/create-education-level.dto';
import { EducationRepository } from './repository/education-level.repository';
import { UpdateEducationLevelDto } from './dto/update-education-level.dto';

describe('EducationLevelsController', () => {
  let educationLevelController: EducationLevelsController;
  let db: EducationLevelsController;
  let educationLevel: EducationLevelsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [DatabaseModule],
      controllers: [EducationLevelsController],
      providers: [EducationLevelsService,
        ...educationLevelProviders],
    }).compile();
    educationLevelController = module.get<EducationLevelsController>(EducationLevelsController);
    db = module.get<EducationLevelsController>(EducationLevelsController)
    educationLevel = module.get<EducationLevelsService>(EducationLevelsService)

  });

  afterEach(async () => {
    db.cleanAll()
  })

  // describe('when update data from education-level', () => {
  //   it('should return correct data ', async () => {
  //     const result = new UpdateEducationLevelDto();
  //     result.name = "saza"

  //     const response = await educationLevelController.update(result)

  //     delete response.data.id
  //     expect(response).toEqual({
  //       data: {
  //         name: "saza"
  //       }
  //     })
  //   });
  // })

  describe('when create from education-level', () => {
    it('should return correct data ', async () => {
      const result = new CreateEducationLevelDto();
      result.name = "ramita"

      const response = await educationLevelController.create(result)

      delete response.data.id
      expect(response).toEqual({
        data: {
          name: "ramita"
        }
      })
    });
  })


  // describe('when get data from education-level', () => {
  //   it('should return correct data ', async () => {
  //     const result = ['ramita']
  //     const response = await educationLevel.findAll()

  //     expect(response).toEqual(result);
  //   })
  // })



});
