import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EducationLevelService } from './domain/services/education-level/education-level.service';
import { ModelModule } from './domain/models/model.module'
import { ControllerModule } from './controllers/controller.module';

@Module({
  imports: [
    ModelModule,
    ControllerModule,
  ],
  controllers: [AppController],
  providers: [AppService, EducationLevelService,ModelModule,ControllerModule,AppController],
})
export class AppModule { }
