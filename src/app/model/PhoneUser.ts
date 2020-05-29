export class PhoneUser {
    
    userId: number;
    loginName: string;
    loginPassword: string;
    fName: string;
    mName: string;
    lName: string;
    organizationType: number;
    email: string;;
    image: any;;
    address: string;;
    mobilePhone: string;;
    organizationName: string;;
    userStatus: number;
    userType: number;

    static fromHttp(httpResponse: PhoneUser): PhoneUser {
        const user = new PhoneUser();
        user.userId = httpResponse.userId;
        user.loginName = httpResponse.loginName;
        user.loginPassword = httpResponse.loginPassword;
        user.fName = httpResponse.fName;
        user.mName = httpResponse.mName;
        user.lName = httpResponse.lName;
        user.organizationType = httpResponse.organizationType;
        user.email = httpResponse.email;
        user.image = httpResponse.image;
        user.address = httpResponse.address;
        user.mobilePhone = httpResponse.mobilePhone;
        user.organizationName = httpResponse.organizationName;
        user.userStatus = httpResponse.userStatus;
        user.userType = httpResponse.userType;
        return user;
    }

}
