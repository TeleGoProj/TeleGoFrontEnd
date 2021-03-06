import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { AdminLookupsResponse } from '../model/response/AdminLookupsResponse';
import {map} from 'rxjs/operators';
import { Country } from '../model/Country';
import { City } from '../model/City';
import { AdminLookupsRequest } from '../model/request/AdminLookupsRequest';
import { Area } from '../model/Area';

@Injectable({
  providedIn: 'root'
})
export class LookupsService {

  constructor(private http: HttpClient) { }

  getLookups(): Observable<AdminLookupsResponse> {
    return this.http.get<AdminLookupsResponse>(environment.restUrl + '/api/admin/view-lookups').
    pipe(
      map(data => {
        return AdminLookupsResponse.fromHttp(data);
      })
    );
  }

  getCitiesByCountryId(countryId: number): Observable<AdminLookupsResponse> {
    return this.http.get<AdminLookupsResponse>(environment.restUrl + '/api/admin/get-cities-by-country-id/' + countryId).
    pipe(
      map(data => {
        return AdminLookupsResponse.fromHttp(data);
      })
    );
  }

  getAreasByCityId(cityId: number): Observable<AdminLookupsResponse> {
    return this.http.get<AdminLookupsResponse>(environment.restUrl + '/api/admin/get-areas-by-city-id/' + cityId).
    pipe(
      map(data => {
        return AdminLookupsResponse.fromHttp(data);
      })
    );
  }


  processCountries(countries: Array<Country>, deletedCountries: Array<Country>): Observable<AdminLookupsResponse> {
    const adminLookupsRequest = new AdminLookupsRequest();
    adminLookupsRequest.countries = countries;
    adminLookupsRequest.deletedCountries = deletedCountries;
    return this.http.put<AdminLookupsResponse>(environment.restUrl + '/api/admin/process-countries', adminLookupsRequest);
  }

  processCities(cities: Array<City>, deletedCities: Array<City>): Observable<AdminLookupsResponse> {
    const adminLookupsRequest = new AdminLookupsRequest();
    adminLookupsRequest.cities = cities;
    adminLookupsRequest.deletedCities = deletedCities;
    return this.http.put<AdminLookupsResponse>(environment.restUrl + '/api/admin/process-cities', adminLookupsRequest).
    pipe(
      map(data => {
        return AdminLookupsResponse.fromHttp(data);
      })
    );
  }

  processAreas(areas: Array<Area>, deletedAreas: Array<Area>): Observable<AdminLookupsResponse> {
    const adminLookupsRequest = new AdminLookupsRequest();
    adminLookupsRequest.areas = areas;
    adminLookupsRequest.deletedAreas = deletedAreas;
    return this.http.put<AdminLookupsResponse>(environment.restUrl + '/api/admin/process-areas', adminLookupsRequest).
    pipe(
      map(data => {
        return AdminLookupsResponse.fromHttp(data);
      })
    );
  }


}
