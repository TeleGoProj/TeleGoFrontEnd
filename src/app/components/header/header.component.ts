import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

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
}
