import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ProfileRequest } from 'src/app/model/request/ProfileRequest';
import { PhoneUser } from 'src/app/model/PhoneUser';
import { RegisterationService } from 'src/app/services/registeration.service';
  import { from } from 'rxjs';
import { data } from 'jquery';
import { LandlinePhone } from 'src/app/model/LandlinePhone';
import { Box } from 'src/app/model/Box';
import { Cabin } from 'src/app/model/Cabin';
import { Area } from 'src/app/model/Area';
import { City } from 'src/app/model/City';
import { Country } from 'src/app/model/Country';

@Component({

  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  confirmPassword = '';

  @Input()
  profileRequest: ProfileRequest;
  

  constructor(private router: Router, private authService: AuthenticationService , private registService : RegisterationService) { }

  ngOnInit() {
    this.profileRequest = new ProfileRequest();
    this.profileRequest.user = new PhoneUser();
   }

  navigateToAdminLookups(){
    this.router.navigate(['admin/lookups']);
  }

  navigateToProfile(){
    this.router.navigate(['user/profile']);
  }

  navigateToUserSearch(){
    this.router.navigate(['user/search']);
  }

  login(){
   this.authService.login(this.profileRequest).subscribe(
     (data) =>{
      this.router.navigate(['user','profile'], {queryParams : { id : data.user.userId}})
      document.getElementById("close-login-button").click();
     }
   );
  }


register(){
this.registService.register(this.profileRequest).subscribe(
  (data)=>{
    this.router.navigate(['user' ,'profile'],{queryParams: {id : data.user.userId}})
    document.getElementById("close-;ogin-button").click();
  }
)

}

  
}
