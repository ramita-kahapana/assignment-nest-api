import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppModule } from './app.module';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { EducationLevelsModule } from './education-levels/education-levels.module';

describe('AppController', () => {
  let appController: AppController;
  let app: TestingModule;
  beforeEach(async () => {
    app = await Test.createTestingModule({
      imports: [EducationLevelsModule,DatabaseModule,AppModule],
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  afterEach(async () => {
    await app.close()
  })
  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
