import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RtlLanguageComponent } from './rtl-language.component';

describe('RtlLanguageComponent', () => {
  let component: RtlLanguageComponent;
  let fixture: ComponentFixture<RtlLanguageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RtlLanguageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RtlLanguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
