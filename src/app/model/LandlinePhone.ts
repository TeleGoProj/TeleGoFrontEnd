import { Box } from './Box';

export class LandlinePhone {
	landlinePhoneId: number;
    phoneNumber: number;
    box: Box;
    
    constructor(){
        this.box = new Box();
    }

    static fromHttp(httpResponse: LandlinePhone): LandlinePhone{
        const landlinePhone = new LandlinePhone();

        if(!httpResponse)
        return landlinePhone;

        landlinePhone.landlinePhoneId = httpResponse.landlinePhoneId;
        landlinePhone.phoneNumber = httpResponse.phoneNumber;
        landlinePhone.box = Box.fromHttp(httpResponse.box);
        return landlinePhone;
    }
}
