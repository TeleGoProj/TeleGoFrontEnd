import { PhoneUser } from '../PhoneUser';

export class ProfileResponse{
    user: PhoneUser;

    static fromHttp(httpResponse: ProfileResponse) {
        const profileResponse = new ProfileResponse();
        profileResponse.user = PhoneUser.fromHttp(httpResponse.user);
        return profileResponse;
      }
}