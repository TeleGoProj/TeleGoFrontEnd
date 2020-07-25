import { Area } from './Area';

export class Cabin {
    area: Area;

    constructor(){
      this.area = new Area();
    }

    static fromHttp(httpResponse: Cabin) {
        const cabin = new Cabin();
        
        if(!httpResponse)
        return cabin;

        cabin.area = Area.fromHttp(httpResponse.area);
        
        return cabin;
      }
}
