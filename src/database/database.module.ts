import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EducationLevelsModule } from '../education-levels/education-levels.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'assignment_db',
      autoLoadEntities: true,
      synchronize: true,
    }),
    EducationLevelsModule,
  ],
})
export class DatabaseModule {}