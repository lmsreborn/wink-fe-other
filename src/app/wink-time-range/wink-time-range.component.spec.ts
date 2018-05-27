import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WinkTimeRangeComponent } from './wink-time-range.component';

describe('WinkTimeRangeComponent', () => {
  let component: WinkTimeRangeComponent;
  let fixture: ComponentFixture<WinkTimeRangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinkTimeRangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinkTimeRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
