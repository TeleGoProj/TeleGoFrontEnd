import { Observable } from 'rxjs';
import { Country } from './../model/Country';
import { LookupsService } from './lookups.service';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AdminLookupsResponse } from '../model/response/AdminLookupsResponse';

@Injectable({
  providedIn: 'root'
})
export class AdminService implements Resolve<Observable<AdminLookupsResponse>>{

  countries = new Array<Country>();
  message: string;

  constructor(private lookupsService: LookupsService) { }

  resolve() {
    return this.lookupsService.getLookups();
  }
}
