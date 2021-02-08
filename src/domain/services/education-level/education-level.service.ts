import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EducationLevelModel } from '../../models/education-level.entity'
// import { CreateEducationDto } from '../../../dto/education-level.dto'

@Injectable()
export class EducationLevelService {
    constructor(
        @InjectRepository(EducationLevelModel)
        private readonly educationLevelRepository: Repository<EducationLevelModel>,
    ) { }

    async findAll(): Promise<EducationLevelModel[]> {
        return this.educationLevelRepository.find({});
    }

    // async create(form: CreateEducationDto): Promise<EducationLevelModel> {
    //     let dto = this.educationLevelRepository.create()
    //     dto.name = form.name

    //     return this.educationLevelRepository.save(dto)
    // }

    async findOne(educationLevelId: number): Promise<EducationLevelModel> {
        const educationLevel = await this.educationLevelRepository.findOne(educationLevelId);
        if (!educationLevel) throw new NotFoundException();
        return educationLevel;
    }

    // async remove(id: string): Promise<void> {
    //     await this.educationLevelRepository.delete(id);
    // }

    // async updateById(EducationId: number, form: CreateEducationDto): Promise<EducationLevelModel> {
    //     const dto: EducationLevelModel = await this.findOne(EducationId)
    //     dto.name = form.name

    //     return await this.educationLevelRepository.save(dto)
    // }


}
