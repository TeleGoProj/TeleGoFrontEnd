import { AdminService } from './services/admin.service';
import { AdminLookupComponent } from './components/admin/lookups/admin-lookup/admin-lookup.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import {HomePageComponent} from './components/home-page/home-page.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { ProfileService } from './services/profile.service';
import { SearchResultComponent } from './search-result/search-result.component';

const routes: Routes = [
  {path : ':lang', component : AppComponent},
  {path : 'admin/lookups', component : AdminLookupComponent, resolve : {adminLookupsResponse : AdminService}},
  {path : 'user/profile/:id', component : UserProfileComponent, resolve : {profileResponse : ProfileService}},
  {path : 'user/search', component : SearchResultComponent},
  {path: '', component : HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
