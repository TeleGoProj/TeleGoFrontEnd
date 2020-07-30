import {BrowserModule} from '@angular/platform-browser';
import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxSummernoteModule } from 'ngx-summernote';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {TranslateModule, TranslateLoader, TranslateService, LangChangeEvent} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { SearchByPhoneComponent } from './components/search-by-phone/search-by-phone.component';
import { LanguageComponent } from './components/language/language.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AdminLookupComponent } from './components/admin/lookups/admin-lookup/admin-lookup.component';
import { AdminLookupCountryComponent } from './components/admin/lookups/admin-lookup-country/admin-lookup-country.component';
import { AdminLookupCityComponent } from './components/admin/lookups/admin-lookup-city/admin-lookup-city.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { PaginationComponent } from './components/pagination/pagination.component';
import { PaginatePipe } from './components/pagination/paginate.pipe';
import { ImgPassComponent } from './components/user-profile/img-pass/img-pass.component';
import { BasicInfoComponent } from './components/user-profile/basic-info/basic-info.component';
import { FeaturesComponent } from './components/user-profile/features/features.component';
import { AboutMeComponent } from './components/user-profile/about-me/about-me.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { AdminLookupAreaComponent } from './components/admin/lookups/admin-lookup-area/admin-lookup-area.component';


// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  
  declarations: [
    
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SearchByPhoneComponent,
    LanguageComponent,
    HomePageComponent,
    AdminLookupComponent,
    AdminLookupCountryComponent,
    AdminLookupCityComponent,
    PaginationComponent,
    PaginatePipe,
    ImgPassComponent,
    BasicInfoComponent,
    FeaturesComponent,
    AboutMeComponent,
    UserProfileComponent,
    SearchResultComponent,
    AdminLookupAreaComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    BrowserAnimationsModule,
    NgbModule,
    NgxSummernoteModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {
}
