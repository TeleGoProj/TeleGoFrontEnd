import { LanguageComponent } from './../../../language/language.component';
import { City } from './../../../../model/City';
import { Component, OnInit, Input } from '@angular/core';
import { AdminService } from './../../../../services/admin.service';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { TranslateService } from '@ngx-translate/core';
import {Subject} from 'rxjs';
import { Area } from './../../../../model/Area';


@Component({
  selector: 'app-admin-lookup-area',
  templateUrl: './admin-lookup-area.component.html',
  styleUrls: ['./admin-lookup-area.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate(1000)),
    ])
    ]
})
export class AdminLookupAreaComponent implements OnInit {

  @Input() cities: Array<City>;
  @Input() areas: Array<Area> ;
  deletedAreas = new Array<Area>();

  message = '';
  alertType = '';
  serverIsProcessing = false;
  showAlert = false;
  alert = new Subject<string>();
  numberOfUnderEditAreas = 0;
  lang: LanguageComponent;
  selectedCity: City;

  constructor(private translate: TranslateService, private adminService: AdminService) { }

  ngOnInit() {
  }

  submitAllAreas() {
    this.serverIsProcessing = true;
    this.showAlert = false;
    this.adminService.processAreas(this.areas, this.deletedAreas).subscribe(
      next => {
          if (next && next.areas) {
            this.areas = new Array<Area>();
            for (const c of next.areas) {
              this.areas.push(Area.fromHttp(c));
              }
            this.translate.get('MESSAGES.PROCESSED_SUCCESSFULLY').subscribe((message: string) => {
            this.message = message;
            this.serverIsProcessing = false;
            this.alert.next(message);
            this.alertType = 'success';
            this.numberOfUnderEditAreas = 0;
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


    getAllAreas(){
      this.getAreasOfCity(new City())
    }

    getAreasOfCity(city: City) {
      this.selectedCity = city;
      this.adminService.getAreasByCityId(this.selectedCity.cityId).subscribe(
        next => {
            if (next && next.areas) {
              this.areas = new Array<Area>();
              for (const c of next.areas) {
                this.areas.push(Area.fromHttp(c));
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
      const newArea = new Area();
      newArea.markedAsEditingNow = true;
      newArea.tempEditingArea = new Area();
      this.areas.push(newArea);
      this.numberOfUnderEditAreas++;
    }

    applyEditedArea(editedArea: Area){
      if (this.isValidArea(editedArea.tempEditingArea)){
        editedArea.clone(editedArea.tempEditingArea);
        editedArea.city = this.selectedCity;
        editedArea.markedAsEditingNow = false;
        this.numberOfUnderEditAreas--;
      }
    }

    editArea(editedArea: Area) {
      editedArea.markedAsEditingNow = true;
      editedArea.tempEditingArea.clone(editedArea);
      this.numberOfUnderEditAreas++;
    }


    deleteArea(deletedArea: Area) {
      this.translate.get('MESSAGES.CONFIRM_DELETE_ITEM').subscribe((message: string) => {
        if (confirm(message)) {
          const index: number = this.areas.indexOf(deletedArea);
          if (index !== -1) {
            deletedArea.markedAsDeleted = true;
              this.areas.splice(index, 1);
              this.deletedAreas.push(deletedArea);
            }
          }
    });
    }

    isValidArea(checkedArea: Area): boolean{
      if (checkedArea && checkedArea.nameEn && checkedArea.nameAr ) {
        return true;
      }
      return false;
    }

}
