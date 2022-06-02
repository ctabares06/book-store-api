import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Country } from '../database/entities/Country.entity';

@Injectable()
export class CountryService {
  constructor(
    @Inject('COUNTRY_REPOSITORY')
    private countryRepository: Repository<Country>,
  ) {}

  async findAll(): Promise<Country[]> {
    return this.countryRepository.find();
  }

  async findByCode(code: string): Promise<Country> {
    return await this.countryRepository.findOneBy({
      code,
    });
  }

  async create(country: Partial<Country>): Promise<Country> {
    const draftCountry = this.countryRepository.create({
      code: country.code,
      name: country.name,
      currencyCode: country.currencyCode,
    });

    return await this.countryRepository.save(draftCountry);
  }

  async update(country: Partial<Country>): Promise<Country> {
    const oldCountry = await this.countryRepository.findOneBy({
      code: country.code,
    });

    oldCountry.name = country.name;
    oldCountry.currencyCode = country.currencyCode;

    return await this.countryRepository.save(oldCountry);
  }
}
