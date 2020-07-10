import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ProfileResponse } from './model/response/ProfileResponse';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient,private router: Router) { }

  login(username: string , password : string): Observable<number> {
    return this.http.get<number>(environment.restUrl + '/api/authentication/login/' + username + '/' + password).
    pipe(
      map(data => {
        if(data )
        return data;
      })
    );
  }
}
