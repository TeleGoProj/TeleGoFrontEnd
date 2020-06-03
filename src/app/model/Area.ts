import { City } from './City';

export class Area {
    city: City;

    static fromHttp(httpResponse: Area) {
        const area = new Area();

        if(!httpResponse)
        return area;

        if(httpResponse.city)
        area.city = City.fromHttp(httpResponse.city);
        
        return area;
      }
}
