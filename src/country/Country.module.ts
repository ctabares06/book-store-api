import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { CountryController } from './Country.controller';
import { CountryProvider } from './Country.provider';
import { CountryService } from './Country.service';

@Module({
  imports: [DatabaseModule],
  controllers: [CountryController],
  providers: [...CountryProvider, CountryService],
})
export class CountryModule {}
