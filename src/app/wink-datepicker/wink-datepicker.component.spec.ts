import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WinkDatepickerComponent } from './wink-datepicker.component';

describe('WinkDatepickerComponent', () => {
  let component: WinkDatepickerComponent;
  let fixture: ComponentFixture<WinkDatepickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinkDatepickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinkDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
