import { Component, OnInit } from '@angular/core';

declare const init_tour_package_cotent: any;

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    init_tour_package_cotent();
  }

}
