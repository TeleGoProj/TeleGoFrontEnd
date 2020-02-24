import { Component, OnInit } from '@angular/core';
import {LangChangeEvent, TranslateService} from '@ngx-translate/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import * as $ from 'jquery';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent implements OnInit {

  selectedLang: string;

  constructor(private translate: TranslateService, private route: ActivatedRoute, private router: Router) {
    // https://github.com/ngx-translate/core
    this.selectedLang = this.route.snapshot.paramMap.get('lang');
    this.route.queryParams.subscribe(
      (params) => {
        this.changeLanguage(params.lang);
      }
    );
    translate.setDefaultLang('en');
    translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.translate.use(this.selectedLang);
    });
  }

  changeLanguage(lang: string) {
    this.selectedLang = lang;
    this.translate.use(this.selectedLang);
    if (lang === 'en') {
      $('html').attr('lang', 'en')
        .find('body').removeClass('arabic');
    } else if (lang === 'ar') {
      $('html').attr('lang', 'ar')
        .find('body').addClass('arabic');
    }
  }

  ngOnInit() {
  }

}
