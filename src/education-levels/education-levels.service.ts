import { Injectable, Inject } from '@nestjs/common';
import { CONSTANT } from 'src/constant/constant';
import { CreateEducationLevelDto } from './dto/create-education-level.dto';
import { UpdateEducationLevelDto } from './dto/update-education-level.dto';
import { EducationLevel } from './entities/education-level.entity';
import { EducationRepository } from './repository/education-level.repository';

@Injectable()
export class EducationLevelsService {
  constructor(
    @Inject(CONSTANT.EDUCATION_LEVEL_REPOSITORY) private readonly educationLevelRepository: EducationRepository,
  ) { }

  create(createEducationLevelDto: CreateEducationLevelDto) {
    const educationLevel = new EducationLevel();
    educationLevel.name = createEducationLevelDto.name;
    return this.educationLevelRepository.save(createEducationLevelDto);
  }

  findAll(): Promise<EducationLevel[]> {
    return this.educationLevelRepository.find({});
  }

  findOne(id: number) {
    return this.educationLevelRepository.findOne(id);
  }

  async update(id: number, updateEducationLevelDto: UpdateEducationLevelDto) {
    await this.educationLevelRepository.update({ id }, updateEducationLevelDto);
    return this.educationLevelRepository.findOne({ id })
  }

  async remove(id: number) {
    await this.educationLevelRepository.delete(id);
    return `This action removes a #${id} educationLevel`;
  }
}
