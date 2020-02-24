import { City } from './../../../../model/City';
import { AdminLookupsResponse } from './../../../../model/response/AdminLookupsResponse';
import { Country } from './../../../../model/Country';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-lookup',
  templateUrl: './admin-lookup.component.html',
  styleUrls: ['./admin-lookup.component.css']
})
export class AdminLookupComponent implements OnInit {

  countries = new Array<Country>();
  cities	= new Array<City> ();

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    const adminLookupsResponse = this.route.snapshot.data['adminLookupsResponse'];
    this.countries = adminLookupsResponse.countries;
    this.cities = adminLookupsResponse.cities;
  }

}
