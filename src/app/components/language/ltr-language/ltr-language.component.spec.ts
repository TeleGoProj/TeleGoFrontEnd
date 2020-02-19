import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LtrLanguageComponent } from './ltr-language.component';

describe('LtrLanguageComponent', () => {
  let component: LtrLanguageComponent;
  let fixture: ComponentFixture<LtrLanguageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LtrLanguageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LtrLanguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
