import { LandlinePhone } from './LandlinePhone';
import { Feature } from './Feature';

export class PhoneUser {
    
    userId: number;
    loginName: string;
    loginPassword: string;
    firstName: string;
    middleName: string;
    lastName: string;
    organizationType: number;
    email: string;;
    image: any;;
    address: string;;
    mobilePhone: string;;
    organizationName: string;;
    userStatus: number;
    userType: number;
    landLinePhone: LandlinePhone;
    features = new Array<Feature>();

    static fromHttp(httpResponse: PhoneUser): PhoneUser {
        const user = new PhoneUser();

        if(!httpResponse)
        return user;

        user.userId = httpResponse.userId;
        user.loginName = httpResponse.loginName;
        user.loginPassword = httpResponse.loginPassword;
        user.firstName = httpResponse.firstName;
        user.middleName = httpResponse.middleName;
        user.lastName = httpResponse.lastName;
        user.organizationType = httpResponse.organizationType;
        user.email = httpResponse.email;
        user.image = httpResponse.image;
        user.address = httpResponse.address;
        user.mobilePhone = httpResponse.mobilePhone;
        user.organizationName = httpResponse.organizationName;
        user.userStatus = httpResponse.userStatus;
        user.userType = httpResponse.userType;
        user.landLinePhone = LandlinePhone.fromHttp(httpResponse.landLinePhone);

        if(httpResponse.features){
            for (const feature of httpResponse.features) {
                user.features.push(feature);
            }
        }

        return user;
    }

}
