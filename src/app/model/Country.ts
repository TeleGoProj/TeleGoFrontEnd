import { City } from './City';
export class Country {

  countryId: number;

  nameEn: string;
  nameAr: string;
  code: string;
  markedAsDeleted = false;
  markedAsEditingNow = false;

  cities: Array<City>;

  constructor(countryId?: number, nameEn?: string, nameAr?: string, code?: string, cities?: Array<City>) {
    this.countryId = countryId;
    this.nameEn = nameEn;
    this.nameAr = nameAr;
    this.code = code;
    this.cities = cities;
  }
}
