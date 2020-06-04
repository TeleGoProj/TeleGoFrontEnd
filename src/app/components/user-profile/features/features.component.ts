import { Component, OnInit, Input } from '@angular/core';
import { Feature } from 'src/app/model/Feature';
import { ProfileRequest } from 'src/app/model/request/ProfileRequest';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {

  @Input()
  profileRequest: ProfileRequest;

  allFeatures = new Array<Array<Feature>>();
  
  constructor(private profileService: ProfileService) { }

  ngOnInit() {
    this.loadAllFeaturesLookups();
  }

  
  loadAllFeaturesLookups(){
    let allFeatures = new Array<Feature>();
    this.profileService.getAllFeaturesLookups().subscribe(
      data => {
        this.allFeatures = this.sliceFeaturesArray(data, 3);
      },
      error =>{

      }
    );
  }

  sliceFeaturesArray(array: Array<Feature>, size: number): Array<Array<Feature>>{
    const arraySlices = Array<Array<Feature>>();
    if(array){
      for (var i=0; i<array.length; i+=size) {
        arraySlices.push(array.slice(i,i+size));
      }
    }
    return arraySlices;
  }
}
