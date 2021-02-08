import { Controller, Get, Post, Put, Delete, Query, Param, Body } from '@nestjs/common';
import { EducationLevelService } from '../../domain/services/education-level/education-level.service'
import { CreateEducationDto } from '../../dto/education-level.dto'
import { EducationLevelModel } from '../../domain/models/education-level.entity'

@Controller('educationlevel')
export class EducationLevelController {
  constructor(private educationLevelService: EducationLevelService) { }

  // @Post()
  // async create(@Body() createEducationDto: CreateEducationDto): Promise<EducationLevelModel> {
  //   return this.educationLevelService.create(createEducationDto);
  // }

  @Get()
  async findAll() {
    return this.educationLevelService.findAll();
  }

  @Get(':id')
  async (@Param('id') id: number){
    return this.educationLevelService.findOne(id);
}

  // @Put(':id')
  // async updateById(@Param('id') id: number, @Body() form: CreateEducationDto) {
  //   return this.educationLevelService.updateById(id, form);
  // }

  // @Delete(':id')
  // async remove(@Param('id') id: string): Promise<void> {
  //   return this.educationLevelService.remove(id);
  // }
}
