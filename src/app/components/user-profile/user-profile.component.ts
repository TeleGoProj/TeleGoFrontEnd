import { Component, OnInit } from '@angular/core';
import { PhoneUser } from 'src/app/model/PhoneUser';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from 'src/app/services/profile.service';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';
import { ProfileRequest } from 'src/app/model/request/ProfileRequest';

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

  constructor(private route: ActivatedRoute, private profileService: ProfileService, private translate: TranslateService) { 
  }

  ngOnInit() {
    this.route.queryParams.subscribe(
      (params) => {
        const id = params['id'] ? params['id'] : 1;
        this.profileService.getProfileData(id).subscribe(
          (profileResponse)=>{
            if(profileResponse && profileResponse.user){
              this.profileRequest = this.createProfileRequestFromUser(profileResponse.user)
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
    const profileRequest = new ProfileRequest();

    const city = user.landLinePhone.box.cabin.area.city;
    const cityPhoneCode = city.phoneCode;
    const phoneCountry = city.country;

    profileRequest.cityPhoneCode = cityPhoneCode;
    profileRequest.phoneCountry = phoneCountry;
    profileRequest.user = user;

    return profileRequest;
  }

  submitProfile(){
    this.profileService.submitProfile(this.profileRequest).subscribe(
      next =>{
        if(this.profileRequest.imageUpdated){
          this.profileService.uploadImage(this.profileRequest).subscribe(
            next2 =>{
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