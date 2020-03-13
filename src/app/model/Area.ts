import { Cabin } from './Cabin';
export class Area {

  areaId: number;
  areaNameEn: string;
  areaNameAr: string;

  markedAsDeleted = false;
  markedAsEditingNow = false;

  cabins: Array<Cabin>;
  tempEiditingArea: Area;


  static fromHttp(httpResponse: Area) {
    const area = new Area();
    area.areaId = httpResponse.areaId;
    area.areaNameEn = httpResponse.areaNameEn;
    area.areaNameAr = httpResponse.areaNameAr;
    area.cabins = httpResponse.cabins;
    area.tempEiditingArea = new Area();
    return area;
  }

  clone(source: Area) {
    this.areaId = source.areaId;
    this.areaNameEn = source.areaNameEn;
    this.areaNameAr = source.areaNameAr;
    this.cabins = source.cabins;
  }

}
