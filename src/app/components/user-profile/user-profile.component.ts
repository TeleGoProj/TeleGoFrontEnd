import { Component, OnInit, ViewChild } from '@angular/core';
import { PhoneUser } from 'src/app/model/PhoneUser';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from 'src/app/services/profile.service';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';
import { ProfileRequest } from 'src/app/model/request/ProfileRequest';
import { LandlinePhone } from 'src/app/model/LandlinePhone';
import { Box } from 'src/app/model/Box';
import { Cabin } from 'src/app/model/Cabin';
import { Area } from 'src/app/model/Area';
import { City } from 'src/app/model/City';
import { Country } from 'src/app/model/Country';
import { ImgPassComponent } from './img-pass/img-pass.component';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  profileRequest = this.createEmptyProfileRequest();
  message = '';
  alertType = '';
  serverIsProcessing = false;
  alert = new Subject<string>();
  @ViewChild(ImgPassComponent, { static: false }) imagePass: ImgPassComponent;

  constructor(private route: ActivatedRoute, private profileService: ProfileService, private translate: TranslateService) { 
  }

  ngOnInit() {
    this.route.queryParams.subscribe(
      (params) => {
        const id = params['id'] ? params['id'] : 1;
        this.profileService.getProfileData(id).subscribe(
          (profileResponse)=>{
            if(profileResponse && profileResponse.user){
              this.profileRequest = this.createProfileRequestFromUser(profileResponse.user);
              this.imagePass.loadImage(profileResponse.user.image);
            }
          }
        );
      }
    );
  }

  createEmptyProfileRequest(): ProfileRequest {
    const profileRequest = new ProfileRequest();
    return profileRequest;
  }

  createProfileRequestFromUser(user: PhoneUser): ProfileRequest {
    const profileRequest = ProfileRequest.fromHttpPhoneUserResponse(user);
    return profileRequest;
  }
  
  submitProfile(){
    this.profileService.submitProfile(this.profileRequest).subscribe(
      (next) =>{
        if(this.profileRequest.imageUpdated){
          this.profileService.uploadImage(this.profileRequest).subscribe(
            (next2) =>{
              this.showSuccessfulMessage();
            },
            error =>{
              this.showErrorMessage();
            }
          );
        }
        else{
          this.showSuccessfulMessage();
        }
      },
      error =>{
        this.showErrorMessage();
      }
    );
  }

  showSuccessfulMessage(){
    this.translate.get('MESSAGES.PROCESSED_SUCCESSFULLY').subscribe(
      (message: string) =>{
        this.message = message;
        this.serverIsProcessing = false;
        this.alert.next(message);
        this.alertType = 'success';
      }
    );
  }

  showErrorMessage(){
    this.translate.get('MESSAGES.AN_ERROR_HAPPENED').subscribe(
      (message: string) =>{
        this.message = message;
        this.serverIsProcessing = false;
        this.alert.next(message);
        this.alertType = 'danger';
      }
    );
  }
}
