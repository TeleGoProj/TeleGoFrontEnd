import { PhoneUser } from '../PhoneUser';
import { Country } from '../Country';
import { LandlinePhone } from '../LandlinePhone';

export class ProfileRequest{
user: PhoneUser;
phoneCountry: Country;
cityPhoneCode: string;
uploadedImage: FormData;
imageUpdated: boolean;
landLinePhone: LandlinePhone;

constructor(){
    this.landLinePhone = new LandlinePhone();
    this.user = new PhoneUser();
}


static fromHttpPhoneUserResponse(httpUserResponse: PhoneUser): ProfileRequest{
    const profileRequest = new ProfileRequest();

    if(!httpUserResponse)
    return profileRequest;

    profileRequest.landLinePhone = LandlinePhone.fromHttp(httpUserResponse.landLinePhone);
    profileRequest.user = PhoneUser.fromHttp(httpUserResponse);

    return profileRequest;
}
}