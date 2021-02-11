import { Module } from '@nestjs/common';
import { EducationLevelsService } from './education-levels.service';
import { EducationLevelsController } from './education-levels.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EducationLevel } from './entities/education-level.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EducationLevel])],
  controllers: [EducationLevelsController],
  providers: [EducationLevelsService],
  exports: [EducationLevelsService]
})
export class EducationLevelsModule { }
