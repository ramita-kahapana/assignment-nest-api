import { Injectable, NotFoundException, Inject } from '@nestjs/common';
import { CONSTANT } from 'src/constant/constants';
import { EducationLevelMoedelRepository } from 'src/repository/education-level.repository';
import { Repository } from 'typeorm';
import { EducationLevelModel } from '../../models/education-level.entity'
import { CreateEducationDto } from '../../../dto/education-level.dto'

@Injectable()
export class EducationLevelService {
    constructor(
        @Inject(CONSTANT.EDUCATION_LEVEL_REPOSITORY) private readonly educationLevelRepository: EducationLevelMoedelRepository,
      ) { }
    
      async createEducationLevel(form: CreateEducationDto): Promise<EducationLevelModel> {
        let dto = this.educationLevelRepository.create()
        dto.name = form.name
        return this.educationLevelRepository.save(dto)
    }
    
      findAll(): Promise<EducationLevelModel[]> {
        return this.educationLevelRepository.find({});
      }
    
      async findById(educationLevelId: number): Promise<EducationLevelModel> {
        const educationLevel = await this.educationLevelRepository.findOne(educationLevelId);
        if (!educationLevel) throw new NotFoundException();
        return educationLevel;
    }
    async updateById(educationLevelId: number, form: CreateEducationDto): Promise<EducationLevelModel> {
        const dto: EducationLevelModel = await this.findById(educationLevelId)
        dto.name = form.name

        return await this.educationLevelRepository.save(dto)
    }
      async remove(id: number) {
        await this.educationLevelRepository.delete(id);
        return `This action removes a #${id} educationLevel`;
      }
}
