import { Module } from '@nestjs/common'
import { DatabaseModule } from 'src/database/database.module';
import { EducationLevelService } from 'src/domain/services/education-level/education-level.service';
import { educationProviders } from 'src/providers/education-level.providers';
import { EducationLevelController } from './education-level/education-level.controller';

@Module({
    imports: [DatabaseModule,],
    controllers: [EducationLevelController],
    providers: [EducationLevelService,
      ...educationProviders],
    exports: [EducationLevelService]

})
export class ControllerModule { }
