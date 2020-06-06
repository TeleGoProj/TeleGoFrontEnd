import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PhoneUser } from '../model/PhoneUser';
import { environment } from 'src/environments/environment';
import { UserSearchRequest } from '../model/request/UserSearchRequest';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { UserSearchResponse } from '../model/response/UserSearchResponse';

@Injectable({
  providedIn: 'root'
})
export class UserSearchService {

  constructor(private http: HttpClient) { }


  searchForUsers(userSearchRequest: UserSearchRequest): Observable<Array<PhoneUser>> {
    return this.http.post<UserSearchResponse>(environment.restUrl + '/api/search/search-users',  userSearchRequest).
    pipe(
      map(usersResponse => {
        let matchedUsers = new Array<PhoneUser>();
        if(usersResponse.matchedUsers)
        {
          for (const user of usersResponse.matchedUsers) {
            matchedUsers.push(PhoneUser.fromHttp(user));
          }
        }
        return matchedUsers;
      })
    );
  }
}
