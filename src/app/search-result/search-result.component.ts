import { Component, OnInit } from '@angular/core';
import { UserSearchService } from '../services/user-search.service';
import { PhoneUser } from '../model/PhoneUser';
import { UserSearchRequest } from '../model/request/UserSearchRequest';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  matchedUsers = new Array<PhoneUser>();
  userSearchRequest = this.createEmptyUserSearchRequest();

  message = '';
  alertType = '';
  serverIsProcessing = false;
  alert = new Subject<string>();
  selectedUser = new PhoneUser();
  
  constructor(private userSearchService: UserSearchService,  private translate: TranslateService) { }

  ngOnInit() {
  }

  searchForUsers(){
    this.userSearchService.searchForUsers(this.userSearchRequest).subscribe(
      data =>{
        this.matchedUsers = data;
      },
      error =>{
        this.showErrorMessage();
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

  createEmptyUserSearchRequest(): UserSearchRequest{
    const userSearchRequest = new  UserSearchRequest();
    userSearchRequest.phoneNumber = null;
    userSearchRequest.featureName = '';
    return userSearchRequest;
  }

  getProfileImage(user: PhoneUser){
    return 'data:image/jpeg;base64,' + user.image;
  }

  showAboutMe(user: PhoneUser){
    this.selectedUser = user;
  }
}
