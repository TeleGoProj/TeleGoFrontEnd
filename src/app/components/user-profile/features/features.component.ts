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

  allFeatures = new Array<Feature>();
  filteredFeatures = new Array<Feature>();

  // maxNumberOfDisplayedFeatures = 60;
  maxNumberOfDisplayedFeaturesPerRow = 3;
  searchFeatureName = '';

  constructor(private profileService: ProfileService) { }

  ngOnInit() {
    this.loadAllFeaturesLookups();
  }

  filterFeatures(){
    this.filteredFeatures = new Array<Feature>();
    for(const feature of  this.allFeatures){
      if(feature.name.indexOf(this.searchFeatureName) >= 0 && this.profileRequest.user.features.indexOf(feature) < 0){
        this.filteredFeatures.push(feature);

        // if(this.filteredFeatures.length == this.maxNumberOfDisplayedFeatures){
        //   break;
        // }
      }
    }
  }
  
  loadAllFeaturesLookups(){
    let allFeatures = new Array<Feature>();
    this.profileService.getAllFeaturesLookups().subscribe(
      data => {
        this.allFeatures = data;
      },
      error =>{

      }
    );
  }

  sliceFeaturesArray(array: Array<Feature>): Array<Array<Feature>>{
    const arraySlices = Array<Array<Feature>>();
    if(array){
      for (var i=0; i<array.length; i+=this.maxNumberOfDisplayedFeaturesPerRow) {
        arraySlices.push(array.slice(i,i+this.maxNumberOfDisplayedFeaturesPerRow));
      }
    }
    return arraySlices;
  }

  addFeatureToUsersFeatures(feature: Feature){
    this.profileRequest.user.features.push(feature);
    this.filteredFeatures.splice(this.filteredFeatures.indexOf(feature), 1);
    this.filterFeatures();
  }

  removeFeatureFromUsersFeatures(feature: Feature){
    this.profileRequest.user.features.splice(this.profileRequest.user.features.indexOf(feature), 1);
    this.filteredFeatures.push(feature);
  }
}
