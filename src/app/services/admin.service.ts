import { Country } from './../model/Country';
import { LookupsService } from './lookups.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  countries = new Array<Country>();
  message: string;

  constructor(private lookupsService: LookupsService) { }

  loadData(){
    this.lookupsService.getCountries().subscribe(
      (next) => {
        this.countries = next;
      },
      (error) => {
        if (error.status === 402) {
          this.message  = 'Sorry - you need to pay to use this application. ';
        } else {
            this.message = 'Sorry - something went wrong, please contact support.';
          }
        }
    );
  }
}
