import { Test, TestingModule } from '@nestjs/testing';
import { EducationLevelsController } from './education-levels.controller';
import { EducationLevelsService } from './education-levels.service';
import { CreateEducationLevelDto } from './dto/create-education-level.dto';
import { TypeOrmModule } from '@nestjs/typeorm';
import { createTestConfiguration } from '../database/database.db';
import { EducationLevel } from './entities/education-level.entity';
import { UpdateEducationLevelDto } from '../education-levels/dto/update-education-level.dto'

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
      delete response.data.id
      expect(response).toEqual({
        data: { name: "ramita" }
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
      const resGetFindOne = await educationLevelController.findOne(response.data.id.toString())
      expect(resGetFindOne).toEqual(
        { data: { id: 1, name: 'ramita' } }
      )
    })
  })

  describe('when update data from education-level', () => {
    it('should return correct data ', async () => {
      const data = new CreateEducationLevelDto();
      data.name = "ramita"
      const response = await educationLevelController.create(data)
      const up = new UpdateEducationLevelDto;
      up.name = "saza"
      const res = await educationLevelController.update(response.data.id.toString(), up)
      expect(res).toEqual(
        { data: { id: 1, name: 'saza' } }
      )
    })
  })

  describe('when delete from education-level', () => {
    it('should return correct data ', async () => {
      const result = new CreateEducationLevelDto();
      result.name = "ramita"
      const response = await educationLevelController.create(result)
      const res = await educationLevelController.remove(response.data.id.toString())
      expect(res).toEqual({ data: { raw: [] } })
    })
  })

});
