import { City } from './../../../../model/City';
import { Component, OnInit, Input } from '@angular/core';
import { AdminService } from './../../../../services/admin.service';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { TranslateService } from '@ngx-translate/core';
import {Subject} from 'rxjs';
import { Country } from './../../../../model/Country';
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
 
  people = ["ahmed"+ " "+"Egypt" , "Mohamed"+" "+"KSA" , " Mariam"+" "+"AUE"];
  @Input() countries: Array<Country>;
  @Input() cities: Array<City> ;
  
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

  submitAllCities() {
    this.serverIsProcessing = true;
    this.showAlert = false;
    this.adminService.processCities(this.cities, this.deletedCities).subscribe(
      next => {
          if (next && next.cities) {
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
  
   

    getCitiesByCountryId(countryId: number) {
      this.adminService.getCitiesByCountryId(countryId).subscribe(
        next => {
            if (next && next.cities) {
              this.cities = new Array<City>();
              for (const c of next.cities) {
                this.cities.push(City.fromHttp(c));
                }
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
      const newCity = new City();
      newCity.markedAsEditingNow = true;
      newCity.tempEditingCity = new City();
      this.cities.push(newCity);
      this.numberOfUnderEditCities++;
    }
  
    applyEditedCity(editedCity: City){
      if (this.isValidCity(editedCity.tempEditingCity)){
        editedCity.clone(editedCity.tempEditingCity);
        editedCity.markedAsEditingNow = false;
        this.numberOfUnderEditCities--;
      }
    }
  
    editCity(editedCity: City) {
      editedCity.markedAsEditingNow = true;
      editedCity.tempEditingCity.clone(editedCity);
      this.numberOfUnderEditCities++;
    }
  
    deleteCity(deletedCity: City) {
      this.translate.get('MESSAGES.CONFIRM_DELETE_ITEM').subscribe((message: string) => {
        if (confirm(message)) {
          const index: number = this.cities.indexOf(deletedCity);
          if (index !== -1) {
              this.cities.splice(index, 1);
              this.deletedCities.push(deletedCity);
              this.numberOfUnderEditCities--;
            }
          }
    });
    }
  
    isValidCity(checkedCity: City): boolean{
      if (checkedCity && checkedCity.nameEn && checkedCity.nameAr && checkedCity.code) {
        return true;
      }
      return false;
    }
  }
  
