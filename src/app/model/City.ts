import { Country } from './Country';

export class City {

  cityId: number;

  nameEn: string;
  nameAr: string;
  code: string;
  phoneCode: string;

  markedAsDeleted = false;
  markedAsEditingNow = false;

  tempEditingCountry: City;
  tempEditingCity : City;

  country: Country;

  static fromHttp(httpResponse: City) {
    const city = new City();

    if(!httpResponse)
    return httpResponse;

    city.cityId = httpResponse.cityId;
    city.nameEn = httpResponse.nameEn;
    city.nameAr = httpResponse.nameAr;
    city.code = httpResponse.code;
    city.phoneCode = httpResponse.phoneCode;
    city.tempEditingCity = new City();

    city.country = Country.fromHttp(httpResponse.country);
    return city;
  }

  clone(source: City) {
    this.cityId = source.cityId;
    this.nameEn = source.nameEn;
    this.nameAr = source.nameAr;
    this.code = source.code;
    this.phoneCode = source.phoneCode;
  }



  /*constructor();
  constructor(cityId?: number, nameEn?: string, nameAr?: string, code?: string) {
    this.cityId = cityId;
    this.nameAr = nameEn;
    this.nameEn = nameAr;
    this.code = code;
  }*/
}







  