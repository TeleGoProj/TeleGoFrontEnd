import { Area } from './Area';
import { Cabin } from './Cabin';

export class Box {
    cabin: Cabin;

    static fromHttp(httpResponse: Box) {
        const box = new Box();
        
        if(!httpResponse)
        return box;

        if(httpResponse.cabin)
        box.cabin = Cabin.fromHttp(httpResponse.cabin);

        return box;
      }
}
