import { City } from './City';
export class Country {

  countryId: number = 0;

  nameEn: string;
  nameAr: string;
  code: string;
  phoneCode: string;
  uiStyle: string;
  markedAsDeleted = false;
  markedAsEditingNow = false;

  cities: Array<City>;

  tempEiditingCountry: Country;

  static fromHttp(httpResponse: Country): Country {
    const country = new Country();

    if(!httpResponse)
    return country;

    country.countryId = httpResponse.countryId;
    country.nameEn = httpResponse.nameEn;
    country.nameAr = httpResponse.nameAr;
    country.code = httpResponse.code;
    country.phoneCode = httpResponse.phoneCode;
    country.uiStyle = httpResponse.uiStyle;
    country.cities = httpResponse.cities;
    country.tempEiditingCountry = new Country();
    return country;
  }

  clone(source: Country) {
    this.countryId = source.countryId;
    this.nameEn = source.nameEn;
    this.nameAr = source.nameAr;
    this.code = source.code;
    this.phoneCode = source.phoneCode;
    this.uiStyle = source.uiStyle;
    this.cities = source.cities;
  }
}
