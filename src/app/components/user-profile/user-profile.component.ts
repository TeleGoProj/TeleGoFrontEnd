import { Component, OnInit } from '@angular/core';
import { PhoneUser } from 'src/app/model/PhoneUser';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from 'src/app/services/profile.service';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user : PhoneUser;
  message = '';
  alertType = '';
  serverIsProcessing = false;
  alert = new Subject<string>();

  constructor(private route: ActivatedRoute, private profileService: ProfileService, private translate: TranslateService) { 
    console.log('UserProfileCompoent');
  }

  ngOnInit() {
    this.user = this.route.snapshot.data.profileResponse.user;
  }

  submitProfile(){
    this.profileService.submitProfile(this.user).subscribe(
      next =>{
        this.profileService.uploadImage(this.user).subscribe(
          next2 =>{
            this.showSuccessfulMessage();
          },
          error =>{
            this.showErrorMessage();
          }
        );
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