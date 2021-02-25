import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { CONSTANT } from '../constant/constant';
import { CreateEducationLevelDto } from './dto/create-education-level.dto';
import { UpdateEducationLevelDto } from './dto/update-education-level.dto';
import { EducationLevel } from './entities/education-level.entity';
import { EducationRepository } from './repository/education-level.repository';

@Injectable()
export class EducationLevelsService {
  constructor(
    @Inject(CONSTANT.EDUCATION_LEVEL_REPOSITORY) private readonly educationLevelRepository: EducationRepository,
  ) { }

  async create(createEducationLevelDto: CreateEducationLevelDto) {
    const educationLevelDto = new EducationLevel();
    educationLevelDto.name = createEducationLevelDto.name;
    const educationLevel = await this.educationLevelRepository.save(educationLevelDto);
    return { data: educationLevel }
  }

  findAll(): Promise<EducationLevel[]> {
    return this.educationLevelRepository.find({});
  }

  async findOne(id: number) {
    const educationLevel = await this.educationLevelRepository.findOne(id);
    if (!educationLevel) {
      throw new NotFoundException('Not data ');
    }
    return { data: educationLevel }
  }

  async update(id: number, updateEducationLevelDto: UpdateEducationLevelDto) {
    await this.educationLevelRepository.update({ id }, updateEducationLevelDto);
    const educationLevel = await this.educationLevelRepository.findOne({ id })
    return { data: educationLevel }
  }

  async remove(id: number) {
    const educationLevel = await this.educationLevelRepository.delete(id);
    return { data: educationLevel }
  }
  async cleanAll() {
    return this.educationLevelRepository.clear()
  }
}
