import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WinkOverviewProjectCurveComponent } from './wink-overview-project-curve.component';

describe('WinkOverviewProjectCurveComponent', () => {
  let component: WinkOverviewProjectCurveComponent;
  let fixture: ComponentFixture<WinkOverviewProjectCurveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinkOverviewProjectCurveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinkOverviewProjectCurveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
