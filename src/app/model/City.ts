export class City {

  cityId: number;

  nameEn: string;
  nameAr: string;
  code: string;

  markedAsDeleted = false;
  markedAsEditingNow = false;

  tempEiditingCountry: City;

  static fromHttp(httpResponse: City) {
    const city = new City();
    city.cityId = httpResponse.cityId;
    city.nameEn = httpResponse.nameEn;
    city.nameAr = httpResponse.nameAr;
    city.code = httpResponse.code;
    city.tempEiditingCountry = new City();
    return city;
  }

  clone(source: City) {
    this.cityId = source.cityId;
    this.nameEn = source.nameEn;
    this.nameAr = source.nameAr;
    this.code = source.code;
    
  }
}





  /*constructor();
  constructor(cityId?: number, nameEn?: string, nameAr?: string, code?: string) {
    this.cityId = cityId;
    this.nameAr = nameEn;
    this.nameEn = nameAr;
    this.code = code;
  }
}*/
