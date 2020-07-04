import { Injectable } from '@angular/core';
import { ProfileResponse } from './model/response/ProfileResponse';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient,private router: Router) { }

  login(username: number, password: string): Observable<number>{
    return this.http.get<ProfileResponse>(environment.restUrl + '/api/profile/get-profile/' + username).
    pipe(
      map(data => {
        if(data && data.user)
        return data.user.userId;
      })
    );
  }
}
