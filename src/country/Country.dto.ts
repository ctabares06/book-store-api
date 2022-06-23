export class CreateCountryDto {
  code: string;
  name: string;
  currencyCode: string;
}

export class UpdateCountryDto {
  name: string;
  currencyCode: string;
}
