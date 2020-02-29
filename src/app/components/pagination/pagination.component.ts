import { Component, OnInit, Input } from '@angular/core';
import { NgbPagination } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  page = 1;
  pageSize = 10;
  @Input()
  collectionSize = 1;

  constructor() { }

  ngOnInit() {
  }

  setPageSize(size: number){
    this.pageSize = size;
  }

}
