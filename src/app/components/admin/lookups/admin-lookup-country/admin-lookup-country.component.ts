import { TranslateService } from '@ngx-translate/core';
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

  constructor(private translate: TranslateService) { }

  ngOnInit() {
  }

  submitAllCountries(){
    console.log("submitCountries: ", this.countries);
  }

  addRow(){
    const newCountry = new Country(new Country());
    newCountry.markedAsEditingNow = true;
    this.countries.push(newCountry);
  }

  applyEditedCountry(editedCountry: Country){
    if (this.isValidCountry(editedCountry.tempEiditingCountry)){
      editedCountry.clone(editedCountry.tempEiditingCountry);
      editedCountry.markedAsEditingNow = false;
    }
  }

  editCountry(editedCountry: Country) {
    editedCountry.markedAsEditingNow = true;
  }

  deleteCountry(deletedCountry: Country) {
    this.translate.get('MESSAGES.CONFIRM_DELETE_ITEM').subscribe((message: string) => {
      if(confirm(message)) {
        const index: number = this.countries.indexOf(deletedCountry);
        if (index !== -1) {
            this.countries.splice(index, 1);
          }
        }
  });
  }

  isValidCountry(checkedCountry: Country): boolean{
    if (checkedCountry && checkedCountry.nameEn && checkedCountry.nameAr && checkedCountry.code) {
      return true;
    }
    return false;
  }
}
