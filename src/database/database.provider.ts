// import { ConfigService } from '@nestjs/config';
// import { EnvVars } from 'src/types/env';
// import { DataSource } from 'typeorm';
import AppDataSource from '../config/database.config';

export const databaseProvider = [
  {
    provide: 'DATA_SOURCE',
    useFactory: () => {
      const dataSource = AppDataSource;

      return dataSource.initialize();
    },
  },
];
