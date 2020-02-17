import { Component } from '@angular/core';
import {LangChangeEvent, TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  languages = ['EN', 'AR'];
  title = 'TeleGo';

  constructor(private translate: TranslateService) {
    // https://github.com/ngx-translate/core
    translate.setDefaultLang('en');
    translate.use('en');
    translate.onLangChange.subscribe((event: LangChangeEvent) => {
      console.log(event);
    });
  }
  changeLanguage(lang: string) {
    this.translate.use(lang);
  }
}
