import { DataSource } from 'typeorm';
import { join } from 'path';

const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.HOST,
  port: Number(process.env.PORT),
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DB_NAME,
  entities: [join(__dirname, '../database/entities/**/*.entity.ts')],
  migrations: [join(__dirname, '../database/migrations/**/*.ts')],
  migrationsTableName: 'migrations_history',
  synchronize: false,
  logging: false,
});

export default AppDataSource;
