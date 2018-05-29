import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WinkOperateInstanceDashboardComponent } from './wink-operate-instance-dashboard.component';

describe('WinkOperateInstanceDashboardComponent', () => {
  let component: WinkOperateInstanceDashboardComponent;
  let fixture: ComponentFixture<WinkOperateInstanceDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinkOperateInstanceDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinkOperateInstanceDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
