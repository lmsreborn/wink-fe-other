import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WinkOperateInstanceCheckpointsComponent } from './wink-operate-instance-checkpoints.component';

describe('WinkOperateInstanceCheckpointsComponent', () => {
  let component: WinkOperateInstanceCheckpointsComponent;
  let fixture: ComponentFixture<WinkOperateInstanceCheckpointsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinkOperateInstanceCheckpointsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinkOperateInstanceCheckpointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
