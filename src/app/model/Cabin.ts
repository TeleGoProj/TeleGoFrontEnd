import { Area } from './Area';

export class Cabin {
    area: Area;

    static fromHttp(httpResponse: Cabin) {
        const cabin = new Cabin();
        
        if(!httpResponse)
        return cabin;

        if(httpResponse.area)
        cabin.area = Area.fromHttp(httpResponse.area);
        
        return cabin;
      }
}
