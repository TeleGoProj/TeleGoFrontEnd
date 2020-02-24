import { AdminService } from './services/admin.service';
import { AdminLookupComponent } from './components/admin/lookups/admin-lookup/admin-lookup.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import {HomePageComponent} from './components/home-page/home-page.component';

const routes: Routes = [
  {path : ':lang', component : AppComponent},
  {path : 'admin/lookups', component : AdminLookupComponent, resolve : {adminLookupsResponse : AdminService}},
  {path: '', component : HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
