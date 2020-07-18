import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/services/profile.service';
import { AuthenticationService } from 'src/app/authentication.service';
import { RegisterServicesService } from 'src/app/services/register-services.service';
import { ProfileRequest } from 'src/app/model/request/ProfileRequest';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  loginRequest: ProfileRequest;
  

  constructor(private router: Router, private authService: AuthenticationService , loginRequest: ProfileRequest ) { }

  ngOnInit() {
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
