import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/services/profile.service';
import { AuthenticationService } from 'src/app/authentication.service';
import { ProfileRequest } from 'src/app/model/request/ProfileRequest';
import { PhoneUser } from 'src/app/model/PhoneUser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  loginRequest: ProfileRequest;
  

  constructor(private router: Router, private authService: AuthenticationService) { }

  ngOnInit() {
    this.loginRequest = new ProfileRequest();
    this.loginRequest.user = new PhoneUser();
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
   this.authService.login(this.loginRequest).subscribe(
     (data) =>{
      this.router.navigate(['user','profile'], {queryParams : { id : data.user.userId}})
      document.getElementById("close-login-button").click();
     }
   );
  }

  
}
