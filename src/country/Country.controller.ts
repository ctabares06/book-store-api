import {
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  Req,
} from '@nestjs/common';
import { Request } from 'express';
import { Country } from 'src/database/entities/Country.entity';
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
  async findOne(@Param() params): Promise<Country> {
    return await this.countryService.findByCode(params.code);
  }

  @Post()
  @HttpCode(201)
  async insert(@Req() request: Request): Promise<Country> {
    const { code, name, currencyCode } = request.body;

    return await this.countryService.create({
      code,
      name,
      currencyCode,
    });
  }

  @Put()
  @HttpCode(201)
  async update(@Req() request: Request): Promise<Country> {
    const { code, name, currencyCode } = request.body;

    return await this.countryService.update({
      code,
      name,
      currencyCode,
    });
  }
}
