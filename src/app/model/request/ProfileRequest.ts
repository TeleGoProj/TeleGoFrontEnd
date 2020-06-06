import { PhoneUser } from '../PhoneUser';
import { Country } from '../Country';

export class ProfileRequest{
user: PhoneUser;
phoneCountry: Country;
cityPhoneCode: string;
uploadedImage: FormData;
imageUpdated: boolean;
}