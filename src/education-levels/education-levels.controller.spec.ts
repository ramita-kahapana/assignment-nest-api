import { Test, TestingModule } from '@nestjs/testing';
import { EducationLevelsController } from './education-levels.controller';
import { EducationLevelsService } from './education-levels.service';
import { CreateEducationLevelDto } from './dto/create-education-level.dto';
import { TypeOrmModule } from '@nestjs/typeorm';
import { createTestConfiguration } from '../database/database.db';
import { EducationLevel } from './entities/education-level.entity';
import { UpdateEducationLevelDto } from '../education-levels/dto/update-education-level.dto'
import { NotFoundException } from '@nestjs/common';

describe('EducationLevelsController', () => {
  let educationLevelController: EducationLevelsController;
  let module: TestingModule;

  beforeEach(async () => {
    module = await Test.createTestingModule({
      imports: [TypeOrmModule.forFeature([EducationLevel]),
      TypeOrmModule.forRoot(createTestConfiguration([EducationLevel]))],
      controllers: [EducationLevelsController],
      providers: [EducationLevelsService],
    }).compile();
    educationLevelController = module.get<EducationLevelsController>(EducationLevelsController);
    await educationLevelController.cleanAll()
  });

  afterEach(async () => {
    await educationLevelController.cleanAll()
    await module.close()
  })

  describe('when create from education-level', () => {
    it('should return correct data ', async () => {
      const result = new CreateEducationLevelDto();
      result.name = "ramita"

      const response = await educationLevelController.create(result)

      expect(response).toEqual({
        data: { id: response.data.id, name: "ramita" }
      })
    })
  })

  describe('when get data from education-level', () => {
    it('should return correct data ', async () => {
      const response = await educationLevelController.findAll()

      expect(response).toEqual({ data: [] })
    })
  })

  describe('when get data in id from education-level', () => {
    it('should return correct data ', async () => {
      const result = new CreateEducationLevelDto();
      result.name = "ramita"

      const response = await educationLevelController.create(result)
      const resGetFindOne = await educationLevelController.findOne(response.data.id)

      expect(resGetFindOne).toEqual(
        { data: { id: response.data.id, name: 'ramita' } }
      )
    })

    it('should return error data ', async () => {
      const ID = 1000
      const error = async () => {
        await educationLevelController.findOne(ID)
      };

      expect(error).rejects.toThrow(NotFoundException)
    })
  })

  describe('when update data from education-level', () => {
    it('should return correct data ', async () => {
      const data = new CreateEducationLevelDto();
      data.name = "ramita"

      const response = await educationLevelController.create(data)
      const up = new UpdateEducationLevelDto;
      up.name = "saza"
      const res = await educationLevelController.update(response.data.id, up)

      expect(res).toEqual(
        { data: { id: response.data.id, name: 'saza' } }
      )
    })

    it('should return error data ', async () => {
      const ID = 1000
      const error = async () => {
        await educationLevelController.findOne(ID)
      };

      expect(error()).rejects.toThrow(NotFoundException)
    })
  })

  describe('when delete from education-level', () => {
    it('should return correct data ', async () => {
      const result = new CreateEducationLevelDto();
      result.name = "ramita"

      const response = await educationLevelController.create(result)
      const res = await educationLevelController.remove(response.data.id)
      
      expect(res).toEqual({ data: { raw: [], affected: 1 } })
    })
  })
});
