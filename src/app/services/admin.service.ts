import { HttpClient } from '@angular/common/http';
import { AdminLookupsRequest } from './../model/request/AdminLookupsRequest';
import { Observable } from 'rxjs';
import { Country } from './../model/Country';
import { City } from './../model/City';
import { LookupsService } from './lookups.service';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AdminLookupsResponse } from '../model/response/AdminLookupsResponse';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService implements Resolve<Observable<AdminLookupsResponse>>{

  countries = new Array<Country>();
  message: string;

  constructor(private lookupsService: LookupsService, private http: HttpClient) { }

  resolve() {
    return this.lookupsService.getLookups();
  }


  getCitiesByCountryId(countryId: number): Observable<AdminLookupsResponse> {
    return this.lookupsService.getCitiesByCountryId(countryId);
  }

  processCountries(countries: Array<Country>, deletedCountries: Array<Country>): Observable<AdminLookupsResponse> {
    return this.lookupsService.processCountries(countries, deletedCountries);
  }

  processCities(cities: Array<City>, deletedCities: Array<City>): Observable<AdminLookupsResponse> {
    return this.lookupsService.processCities( cities, deletedCities);
  }

}
