import { Component, OnInit, Input } from '@angular/core';
import { Country } from 'src/app/model/Country';
import { ProfileService } from 'src/app/services/profile.service';
import { ProfileRequest } from 'src/app/model/request/ProfileRequest';



@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.css']
})
export class BasicInfoComponent implements OnInit {

 

  @Input()
  profileRequest: ProfileRequest;
  countries = new Array<Country>();
  
  constructor(private profileService: ProfileService ) { }

  ngOnInit() {
    this.loadAllCountriesLookups();
  }

  loadAllCountriesLookups(){
    let allCountries = new Array<Country>();
    this.profileService.getAllCountriesLookups().subscribe(
      data => {
        this.countries = data;
      },
      error =>{

      }
    );
  }

  updateSelectedCountry(country: Country){
    this.profileRequest.phoneCountry = country;
  }


  


}
