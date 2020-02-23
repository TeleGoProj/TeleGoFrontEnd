import { City } from './City';
export class Country {

  countryId: number;

  nameEn: string;
  nameAr: string;
  code: string;

  cities: Array<City>;
}
