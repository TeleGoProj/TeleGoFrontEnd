import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/services/profile.service';
import { AuthenticationService } from 'src/app/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  username: number ;

  constructor(private router: Router, private authService: AuthenticationService) { }

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
   this.authService.login(this.username, '').subscribe(
     (data)=>{
      this.router.navigate(['user','profile'], {queryParams : { id : data}})
      document.getElementById("close-login-button").click();
     }
   );
  }
}
