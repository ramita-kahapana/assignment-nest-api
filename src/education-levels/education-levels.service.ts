import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEducationLevelDto } from './dto/create-education-level.dto';
import { UpdateEducationLevelDto } from './dto/update-education-level.dto';
import { EducationLevel } from './entities/education-level.entity';


@Injectable()
export class EducationLevelsService {
  constructor(
    @InjectRepository(EducationLevel) private readonly educationLevelRepository: Repository<EducationLevel>,
  ) { }

  async create(createEducationLevelDto: CreateEducationLevelDto) {
    const educationLevelDto = new EducationLevel();
    educationLevelDto.name = createEducationLevelDto.name;
    const educationLevel = await this.educationLevelRepository.save(educationLevelDto);
    return { data: educationLevel }
  }

 async findAll() {
  const educationLevel = await this.educationLevelRepository.find({});
    return { data: educationLevel }
  }

  async findOne(id: number) {
    const educationLevel = await this.educationLevelRepository.findOne(id);
    if (!educationLevel) {
      throw new NotFoundException('Not data');
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
    return await this.educationLevelRepository.clear()
  }
}
