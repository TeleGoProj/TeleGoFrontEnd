export class City {

  cityId: number;

  nameEn: string;
  nameAr: string;
  code: string;

  markedAsDeleted = false;

  constructor();
  constructor(cityId?: number, nameEn?: string, nameAr?: string, code?: string) {
    this.cityId = cityId;
    this.nameAr = nameEn;
    this.nameEn = nameAr;
    this.code = code;
  }
}
