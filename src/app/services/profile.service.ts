import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProfileResponse } from '../model/response/ProfileResponse';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { PhoneUser } from '../model/PhoneUser';
import { ProfileRequest } from '../model/request/ProfileRequest';
import { Country } from '../model/Country';
import { Feature } from '../model/Feature';

@Injectable({
  providedIn: 'root'
})
export class ProfileService{

  uploadedImage: FormData;

  constructor(private http: HttpClient,private router: Router) { }

  getProfileData(id: number): Observable<ProfileResponse>{
    return this.http.get<ProfileResponse>(environment.restUrl + '/api/profile/get-profile/' + id).
    pipe(
      map(data => {
        return ProfileResponse.fromHttp(data);
      })
    );
  }

  submitProfile(profileRequest: ProfileRequest): Observable<ProfileResponse>{
    return this.http.post<ProfileResponse>(environment.restUrl + '/api/profile/process-profile', profileRequest);
  }

  uploadImage(profileRequest: ProfileRequest): Observable<ProfileResponse>{
    return this.http.post<ProfileResponse>(environment.restUrl + '/api/profile/upload-image/' + profileRequest.user.userId, this.uploadedImage);
  }
  
  getAllCountriesLookups(): Observable<Array<Country>> {
    return this.http.get<Array<Country>>(environment.restUrl + '/api/profile/get-all-countries').
    pipe(
      map(countriesResponse => {
        let allCountries = new Array<Country>();
        if(countriesResponse)
        {
          for (const country of countriesResponse) {
            allCountries.push(Country.fromHttp(country));
          }
        }
        return allCountries;
      })
    );
  }
  
  getAllFeaturesLookups(): Observable<Array<Feature>> {
    return this.http.get<Array<Feature>>(environment.restUrl + '/api/profile/get-all-features').
    pipe(
      map(featuresResponse => {
        let allFeatures = new Array<Feature>();
        if(featuresResponse)
        {
          for (const feature of featuresResponse) {
            allFeatures.push(Feature.fromHttp(feature));
          }
        }
        return allFeatures;
      })
    );
  }
}
