import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WinkOperateInstanceFailoverComponent } from './wink-operate-instance-failover.component';

describe('WinkOperateInstanceFailoverComponent', () => {
  let component: WinkOperateInstanceFailoverComponent;
  let fixture: ComponentFixture<WinkOperateInstanceFailoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinkOperateInstanceFailoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinkOperateInstanceFailoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
