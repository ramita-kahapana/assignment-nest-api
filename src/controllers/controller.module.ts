import { Module } from '@nestjs/common'
import { EducationLevelService } from 'src/domain/services/education-level/education-level.service';
import { educationProviders } from 'src/providers/education-level.providers';
import { EducationLevelMoedelRepository } from 'src/repository/education-level.repository';
import { EducationLevelController } from './education-level/education-level.controller';

@Module({
    imports: [
        EducationLevelService,
    ],
    providers: [
        // ...educationProviders,
        EducationLevelService,
        EducationLevelMoedelRepository
    ],
    exports: [
        EducationLevelService,
    ],
    controllers: [EducationLevelController],

})
export class ControllerModule { }
