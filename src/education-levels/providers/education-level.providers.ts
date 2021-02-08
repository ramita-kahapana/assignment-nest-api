import { Connection, Repository } from 'typeorm';
import { CONSTANT } from 'src/constant/constant';
import { EducationRepository } from '../repository/education-level.repository';

export const educationLevelProviders = [
    {
        provide: CONSTANT.EDUCATION_LEVEL_REPOSITORY,
        useFactory: (connection: Connection) => connection.getCustomRepository(EducationRepository),
        inject: [CONSTANT.DATABASE_CONNECTION],
    },
];