import { Module } from '@nestjs/common';
import { EducationLevelsService } from './education-levels.service';
import { EducationLevelsController } from './education-levels.controller';
import { educationLevelProviders } from './providers/education-level.providers'
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [EducationLevelsController],
  providers: [EducationLevelsService,
    ...educationLevelProviders],
  exports: [EducationLevelsService]
})
export class EducationLevelsModule { }
