import { createConnection } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () => await createConnection({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'assignment_db',
      entities: [__dirname + '/../**/entities/*.entity.{js,ts}',],
      synchronize: true,
    }),
  },
];