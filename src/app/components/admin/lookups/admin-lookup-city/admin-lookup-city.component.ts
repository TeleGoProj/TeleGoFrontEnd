import { City } from './../../../../model/City';
import { Component, OnInit, Input } from '@angular/core';
import { AdminService } from './../../../../services/admin.service';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { TranslateService } from '@ngx-translate/core';
import {Subject} from 'rxjs';
@Component({
  selector: 'app-admin-lookup-city',
  templateUrl: './admin-lookup-city.component.html',
  styleUrls: ['./admin-lookup-city.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate(1000)),
    ])
    ]
})
export class AdminLookupCityComponent implements OnInit {

  @Input() cities: Array<City>;
  deletedCities = new Array<City>();

  message = '';
  alertType = '';
  serverIsProcessing = false;
  showAlert = false;
  alert = new Subject<string>();
  numberOfUnderEditCities = 0;

  constructor(private translate: TranslateService, private adminService: AdminService) { }


 

  ngOnInit() {
  }

  submitAllCountries() {
    this.serverIsProcessing = true;
    this.showAlert = false;
    this.adminService.processCities(this.cities, this.deletedCities).subscribe(
      next => {
          if (next && next.countries) {
            this.cities = new Array<City>();
            for (const c of next.cities) {
              this.cities.push(City.fromHttp(c));
              }
            this.translate.get('MESSAGES.PROCESSED_SUCCESSFULLY').subscribe((message: string) => {
            this.message = message;
            this.serverIsProcessing = false;
            this.alert.next(message);
            this.alertType = 'success';
          });
          }
      },
      error => {
          this.translate.get('MESSAGES.AN_ERROR_HAPPENED').subscribe((message: string) => {
          this.message = message + ' ' + error.message;
          this.serverIsProcessing = false;
          this.alert.next(message);
          this.alertType = 'danger';
        });
      }
    );
    }
  
    addRow() {
      const newCountry = new City();
      newCountry.markedAsEditingNow = true;
      newCountry.tempEiditingCountry = new City();
      this.cities.push(newCountry);
      this.numberOfUnderEditCities++;
    }
  
    applyEditedCountry(editedCountry: City){
      if (this.isValidCountry(editedCountry.tempEiditingCountry)){
        editedCountry.clone(editedCountry.tempEiditingCountry);
        editedCountry.markedAsEditingNow = false;
        this.numberOfUnderEditCities--;
      }
    }
  
    editCountry(editedCountry: City) {
      editedCountry.markedAsEditingNow = true;
      editedCountry.tempEiditingCountry.clone(editedCountry);
      this.numberOfUnderEditCities++;
    }
  
    deleteCountry(deletedCountry: City) {
      this.translate.get('MESSAGES.CONFIRM_DELETE_ITEM').subscribe((message: string) => {
        if (confirm(message)) {
          const index: number = this.cities.indexOf(deletedCountry);
          if (index !== -1) {
              this.cities.splice(index, 1);
              this.deletedCities.push(deletedCountry);
              this.numberOfUnderEditCities--;
            }
          }
    });
    }
  
    isValidCountry(checkedCity: City): boolean{
      if (checkedCity && checkedCity.nameEn && checkedCity.nameAr && checkedCity.code) {
        return true;
      }
      return false;
    }
  }
  



