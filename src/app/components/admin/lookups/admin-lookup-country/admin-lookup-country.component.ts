import { Country } from './../../../../model/Country';
import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-admin-lookup-country',
  templateUrl: './admin-lookup-country.component.html',
  styleUrls: ['./admin-lookup-country.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate(1000)),
    ])
    ]
})
export class AdminLookupCountryComponent implements OnInit {

  @Input() countries: Array<Country>;
  constructor() { }

  ngOnInit() {
  }

  submitCountries(){
    console.log("submitCountries: ", this.countries);
  }

  addRow(){
    const newCountry = new Country();
    newCountry.markedAsEditingNow = true;
    this.countries.push(newCountry);
  }

}
