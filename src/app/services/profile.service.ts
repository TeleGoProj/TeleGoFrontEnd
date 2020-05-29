import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProfileResponse } from '../model/response/ProfileResponse';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { PhoneUser } from '../model/PhoneUser';
import { ProfileRequest } from '../model/request/ProfileRequest';

@Injectable({
  providedIn: 'root'
})
export class ProfileService implements Resolve<Observable<ProfileResponse>>{

  uploadedImage: FormData;

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

  submitProfile(user: PhoneUser){
    const profileRequest = new ProfileRequest();
    profileRequest.user = user;
    this.http.post<ProfileResponse>(environment.restUrl + '/api/profile/process-profile', profileRequest).subscribe(
      submitted =>{
        this.http.post<ProfileResponse>(environment.restUrl + '/api/profile/upload-image/' + user.userId, this.uploadedImage).subscribe(
          imageUploaded =>{

          },
          imageUploadError =>{

          }
        )
      },
      subitError =>{
        
      }  
    );
  }
}
