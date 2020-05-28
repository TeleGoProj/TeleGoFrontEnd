import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgPassComponent } from './img-pass.component';

describe('ImgPassComponent', () => {
  let component: ImgPassComponent;
  let fixture: ComponentFixture<ImgPassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgPassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
