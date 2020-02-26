import { City } from './City';
export class Country {

  countryId: number;

  nameEn: string;
  nameAr: string;
  code: string;
  markedAsDeleted = false;
  markedAsEditingNow = false;

  cities: Array<City>;

  tempEiditingCountry: Country;

  constructor(tempEiditingCountry?: Country, countryId?: number, nameEn?: string, nameAr?: string, code?: string, cities?: Array<City>) {
    this.tempEiditingCountry = tempEiditingCountry;
    this.countryId = countryId;
    this.nameEn = nameEn;
    this.nameAr = nameAr;
    this.code = code;
    this.cities = cities;
  }

  clone(source: Country) {
    this.countryId = source.countryId;
    this.nameEn = source.nameEn;
    this.nameAr = source.nameAr;
    this.code = source.code;
    this.cities = source.cities;
  }
}
