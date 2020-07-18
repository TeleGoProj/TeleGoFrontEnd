import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ProfileResponse } from './model/response/ProfileResponse';
import { ProfileRequest } from './model/request/ProfileRequest';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  
  constructor(private http: HttpClient,private router: Router ) { }

  login(loginRequest : ProfileRequest): Observable<ProfileResponse> {
    return this.http.post<ProfileResponse>(environment.restUrl + '/api/authentication/login/' , loginRequest).
    pipe(
      map(data => {
        if(data )
        return data;
      })
    );
  }
}
