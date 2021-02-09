import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ControllerModule } from './controllers/controller.module';
import { DatabaseModule } from './database/database.module';
import { educationProviders } from './providers/education-level.providers';

@Module({
  imports: [
    ControllerModule,
    DatabaseModule
  ],
  controllers: [AppController],
  providers: [AppService,...educationProviders],
})
export class AppModule { }
