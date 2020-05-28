import { Component, OnInit } from '@angular/core';
import { PhoneUser } from 'src/app/model/PhoneUser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user : PhoneUser;

  constructor(private route: ActivatedRoute) { 
    console.log('UserProfileCompoent');
  }

  ngOnInit() {
    this.user = this.route.snapshot.data.profileResponse.user;
  }

}
