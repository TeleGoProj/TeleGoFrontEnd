import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLookupAreaComponent } from './admin-lookup-area.component';

describe('AdminLookupAreaComponent', () => {
  let component: AdminLookupAreaComponent;
  let fixture: ComponentFixture<AdminLookupAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminLookupAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLookupAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
