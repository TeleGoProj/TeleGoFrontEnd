import { Injectable, Input } from '@angular/core';
import { ProfileRequest } from '../model/request/ProfileRequest';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ProfileResponse } from '../model/response/ProfileResponse';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegisterationService {

 
  constructor(private http: HttpClient,private router: Router ) { }


  register(profileRequest : ProfileRequest): Observable<ProfileResponse> {
    return this.http.post<ProfileResponse>(environment.restUrl + '/api/registeration/register' , profileRequest).
    pipe(
      map(data => {
        if(data )
        return data;
      })
    );
  }



}
