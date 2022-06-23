import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { JoiValidationPipe } from 'src/common/validation.pipe';
import { Country } from 'src/database/entities/Country.entity';
import { CreateCountryDto, UpdateCountryDto } from './Country.dto';
import { CreateCountrySchema, UpdateCountrySchema } from './Country.schema';
import { CountryService } from './Country.service';

@Controller('country')
export class CountryController {
  constructor(private readonly countryService: CountryService) {}

  @Get()
  @HttpCode(200)
  async findAll(): Promise<Country[]> {
    return await this.countryService.findAll();
  }

  @Get(':code')
  @HttpCode(200)
  async findOne(@Param('code') code): Promise<Country> {
    return await this.countryService.findByCode(code);
  }

  @Post()
  @HttpCode(201)
  async insert(
    @Body(new JoiValidationPipe(CreateCountrySchema))
    CreateCountryDto: CreateCountryDto,
  ): Promise<Country> {
    const { code, name, currencyCode } = CreateCountryDto;

    return await this.countryService.create({
      code,
      name,
      currencyCode,
    });
  }

  @Put(':code')
  @HttpCode(201)
  async update(
    @Body(new JoiValidationPipe(UpdateCountrySchema))
    UpdateCountryDto: UpdateCountryDto,
    @Param('code') code,
  ): Promise<Country> {
    const { name, currencyCode } = UpdateCountryDto;

    return await this.countryService.update({
      code,
      name,
      currencyCode,
    });
  }
}
