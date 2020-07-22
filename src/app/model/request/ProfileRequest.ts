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
}