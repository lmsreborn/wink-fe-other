import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WinkOperateInstanceDashboardVerticesComponent } from './wink-operate-instance-dashboard-vertices.component';

describe('WinkOperateInstanceDashboardVerticesComponent', () => {
  let component: WinkOperateInstanceDashboardVerticesComponent;
  let fixture: ComponentFixture<WinkOperateInstanceDashboardVerticesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinkOperateInstanceDashboardVerticesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinkOperateInstanceDashboardVerticesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
