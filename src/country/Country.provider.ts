import { DataSource } from 'typeorm';
import { Country } from '../database/entities/Country.entity';

export const CountryProvider = [
  {
    provide: 'COUNTRY_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Country),
    inject: ['DATA_SOURCE'],
  },
];
