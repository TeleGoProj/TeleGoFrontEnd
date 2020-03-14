import { AdminService } from './../../../../services/admin.service';
import { TranslateService } from '@ngx-translate/core';
import { Country } from './../../../../model/Country';
import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';
import {Subject} from 'rxjs';

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
  deletedCountries = new Array<Country>();

  message = '';
  alertType = '';
  serverIsProcessing = false;
  showAlert = false;
  alert = new Subject<string>();
  numberOfUnderEditCountries = 0;

  constructor(private translate: TranslateService, private adminService: AdminService) { }

  ngOnInit() {
  }

  submitAllCountries() {
  this.serverIsProcessing = true;
  this.showAlert = false;
  this.adminService.processCountries(this.countries, this.deletedCountries).subscribe(
    next => {
        if (next && next.countries) {
          this.countries = new Array<Country>();
          for (const c of next.countries) {
            this.countries.push(Country.fromHttp(c));
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
    const newCountry = new Country();
    newCountry.markedAsEditingNow = true;
    newCountry.tempEditingCountry = new Country();
    this.countries.push(newCountry);
    this.numberOfUnderEditCountries++;
  }

  applyEditedCountry(editedCountry: Country){
    if (this.isValidCountry(editedCountry.tempEditingCountry)){
      editedCountry.clone(editedCountry.tempEditingCountry);
      editedCountry.markedAsEditingNow = false;
      this.numberOfUnderEditCountries--;
    }
  }

  editCountry(editedCountry: Country) {
    editedCountry.markedAsEditingNow = true;
    editedCountry.tempEditingCountry.clone(editedCountry);
    this.numberOfUnderEditCountries++;
  }

  deleteCountry(deletedCountry: Country) {
    this.translate.get('MESSAGES.CONFIRM_DELETE_ITEM').subscribe((message: string) => {
      if (confirm(message)) {
        const index: number = this.countries.indexOf(deletedCountry);
        if (index !== -1) {
            this.countries.splice(index, 1);
            this.deletedCountries.push(deletedCountry);
            this.numberOfUnderEditCountries--;
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
