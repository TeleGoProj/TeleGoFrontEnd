import { City } from './../../../../model/City';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-admin-lookup-city',
  templateUrl: './admin-lookup-city.component.html',
  styleUrls: ['./admin-lookup-city.component.css']
})
export class AdminLookupCityComponent implements OnInit {

  @Input() cities: Array<City>;

  constructor() { }

  ngOnInit() {
  }

}
