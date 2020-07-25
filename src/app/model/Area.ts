import { City } from './City';

export class Area {
    city: City;

    constructor(){
      this.city = new City();
    }

    static fromHttp(httpResponse: Area) {
        const area = new Area();

        if(!httpResponse)
        return area;

        area.city = City.fromHttp(httpResponse.city);
        
        return area;
      }
}
