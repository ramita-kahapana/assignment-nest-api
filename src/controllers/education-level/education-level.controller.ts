import { Controller, Get, Post, Put, Delete, Query, Param, Body } from '@nestjs/common';
import { EducationLevelService } from '../../domain/services/education-level/education-level.service'
import { CreateEducationDto } from '../../dto/education-level.dto'
import { EducationLevelModel } from '../../domain/models/education-level.entity'

@Controller('educationlevel')
export class EducationLevelController {
  constructor(private readonly educationLevelsService: EducationLevelService) {}

  @Post()
  create(@Body() form: CreateEducationDto){
    return this.educationLevelsService.createEducationLevel(form)
}

  @Get()
  findAll() {
    return this.educationLevelsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.educationLevelsService.findById(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() form: CreateEducationDto) {
    return this.educationLevelsService.updateById(id, form);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.educationLevelsService.remove(+id);
  }
}
