import { City } from './City';

export class Area {
    areaId: number;
    nameEn: string;
    nameAr: string;

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
        area.nameAr= httpResponse.nameAr;
        area.nameEn=httpResponse.nameEn;
        area.tempEditingArea = new Area();
        area.city = City.fromHttp(httpResponse.city);
        
        
        return area;
      }


      clone(source: Area) {
        this.areaId = source.areaId;
        this.nameEn = source.nameEn;
        this.nameAr = source.nameAr;

      }
}
