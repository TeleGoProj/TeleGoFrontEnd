import { Component, OnInit } from '@angular/core';
import {LangChangeEvent, TranslateService} from '@ngx-translate/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent implements OnInit {

  selectedLang: string;

  constructor(private translate: TranslateService, private route: ActivatedRoute) {
    // https://github.com/ngx-translate/core
    this.selectedLang = this.route.snapshot.paramMap.get('lang');
    translate.setDefaultLang('en');
    this.changeLanguage(this.selectedLang);
    translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.selectedLang = event.lang;
      this.changeLanguage(this.selectedLang);
    });
  }

  changeLanguage(lang: string) {
    this.translate.use(lang);
  }

  ngOnInit() {
  }

}
