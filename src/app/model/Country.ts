import { City } from './City';
export class Country {

  countryId: number;

  nameEn: string;
  nameAr: string;
  code: string;

  cities: Array<City>;

  constructor(countryId: number, nameEn: string, nameAr: string, code: string, cities: Array<City>) {
    this.countryId = countryId;
    this.nameEn = nameEn;
    this.nameEn = nameAr;
    this.code = code;
    this.cities = cities;
  }
}
