import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { EducationLevelsModule } from './education-levels/education-levels.module';


@Module({
  imports: [EducationLevelsModule,DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
