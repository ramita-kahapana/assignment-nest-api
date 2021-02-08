import { CONSTANT } from 'src/constant/constants';
import { EducationLevelMoedelRepository } from 'src/repository/education-level.repository';
import { Connection } from 'typeorm';

export const educationProviders = [
    {
        provide: CONSTANT.EDUCATION_LEVEL_REPOSITORY,
        useFactory: (connection: Connection) => connection.getCustomRepository(EducationLevelMoedelRepository),
        inject: [CONSTANT.EDUCATION_LEVEL_REPOSITORY],
    },
];