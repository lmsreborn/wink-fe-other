import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WinkOperateInstanceCurveComponent } from './wink-operate-instance-curve.component';

describe('WinkOperateInstanceCurveComponent', () => {
  let component: WinkOperateInstanceCurveComponent;
  let fixture: ComponentFixture<WinkOperateInstanceCurveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinkOperateInstanceCurveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinkOperateInstanceCurveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
