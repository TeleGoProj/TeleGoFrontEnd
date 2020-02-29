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
    const egypt = new Country(new Country(), 1, 'Egypt', 'Misr', 'EG', null);
    // const france = new Country(1, 'France', 'Faransa', 'FR', null);
    // const usa = new Country(1, 'USA', 'Amrika', 'USA', null);
    // const libya = new Country(1, 'Libya', 'Liby', 'Ly', null);


    for (let i = 0; i < 53; i++) {
      const c = new Country(new Country(), i + 1, 'Egypt', 'Misr', 'EG', null);
      countries.push(c);
    }
    // countries.push(france);
    // countries.push(usa);
    // countries.push(libya);

    adminLookupsResponse.countries = countries;

    return of(adminLookupsResponse);
  }
}
