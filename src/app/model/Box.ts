import { LandlinePhone } from './LandlinePhone';

export class Box {

	boxId: number;
	boxName: string;
	longitude : number;
	latitude: number;
	streetName : string;

    markedAsDeleted = false;
    markedAsEditingNow = false;

   
    boxes: Array<Box>;

    
  tempEditingBox: Box;

  static fromHttp(httpResponse: Box) {
    const box = new Box();
    box.boxId = httpResponse.boxId;
    box.boxName = httpResponse.boxName;
    box.longitude = httpResponse.longitude;
    box.latitude = httpResponse.latitude;
    box.streetName = httpResponse.streetName;
    box.tempEditingBox = new Box();
    return box;
  }

  clone(source: Box) {
    this.boxId = source.boxId;
    this.boxName = source.boxName;
    this.longitude = source.longitude;
    this.latitude = source.latitude;
    this.streetName = source.streetName;
}
}