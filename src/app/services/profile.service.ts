import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProfileResponse } from '../model/response/ProfileResponse';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProfileService implements Resolve<Observable<ProfileResponse>>{

  constructor(private http: HttpClient) { }

  getProfileData(id: number): Observable<ProfileResponse>{
    return this.http.get<ProfileResponse>(environment.restUrl + '/api/profile/get-profile/' + id).
    pipe(
      map(data => {
        return ProfileResponse.fromHttp(data);
      })
    );
  }

  resolve() {
    return this.getProfileData(1);
  }
}
