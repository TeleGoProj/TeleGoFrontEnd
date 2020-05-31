import { PhoneUser } from '../PhoneUser';
import { Country } from '../Country';

export class ProfileRequest{
user: PhoneUser;
phoneCountry: Country;
cityCode: string;
uploadedImage: FormData;
}