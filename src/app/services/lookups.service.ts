import { Country } from './../model/Country';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AdminLookupsResponse } from '../model/response/AdminLookupsResponse';

@Injectable({
  providedIn: 'root'
})
export class LookupsService {

  constructor() { }


  getLookups(): Observable<AdminLookupsResponse> {
    const adminLookupsResponse = new AdminLookupsResponse();

    const countries = new Array<Country>();
    const egypt = new Country(1, 'Egypt', 'Misr', 'EG', null);
    // const france = new Country(1, 'France', 'Faransa', 'FR', null);
    // const usa = new Country(1, 'USA', 'Amrika', 'USA', null);
    // const libya = new Country(1, 'Libya', 'Liby', 'Ly', null);

    countries.push(egypt);
    // countries.push(france);
    // countries.push(usa);
    // countries.push(libya);

    adminLookupsResponse.countries = countries;

    return of(adminLookupsResponse);
  }
}
