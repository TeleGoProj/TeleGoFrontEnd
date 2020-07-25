import { Area } from './Area';
import { Cabin } from './Cabin';

export class Box {
    cabin: Cabin;

    constructor(){
      this.cabin = new Cabin();
    }

    static fromHttp(httpResponse: Box) {
        const box = new Box();
        
        if(!httpResponse)
        return box;

        box.cabin = Cabin.fromHttp(httpResponse.cabin);

        return box;
      }
}
