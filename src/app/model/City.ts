export class City {

  cityId: number;

  nameEn: string;
  nameAr: string;
  code: string;

  constructor();
  constructor(cityId?: number, nameEn?: string, nameAr?: string, code?: string) {
    this.cityId = cityId;
    this.nameEn = nameEn;
    this.nameEn = nameAr;
    this.code = code;
  }
}
