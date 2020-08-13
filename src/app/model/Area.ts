import { City } from './City';

export class Area {
    areaId: number;
    areaNameEn: string;
    areaNameAr: string;

    markedAsDeleted = false;
    markedAsEditingNow = false;

    tempEditingArea : Area;
    city: City;

    constructor(){
      this.city = new City();
    }

    static fromHttp(httpResponse: Area) {
        const area = new Area();

        if(!httpResponse)
        return area;
         
        area.areaId= httpResponse.areaId;
        area.areaNameAr= httpResponse.areaNameAr;
        area.areaNameEn=httpResponse.areaNameEn;
        area.tempEditingArea = new Area();
        area.city = City.fromHttp(httpResponse.city);
        
        
        return area;
      }


      clone(source: Area) {
        this.areaId = source.areaId;
        this.areaNameEn = source.areaNameEn;
        this.areaNameAr = source.areaNameAr;

      }
}
