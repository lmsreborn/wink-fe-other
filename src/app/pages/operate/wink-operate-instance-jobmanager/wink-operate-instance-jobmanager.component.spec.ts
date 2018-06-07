import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WinkOperateInstanceJobmanagerComponent } from './wink-operate-instance-jobmanager.component';

describe('WinkOperateInstanceJobmanagerComponent', () => {
  let component: WinkOperateInstanceJobmanagerComponent;
  let fixture: ComponentFixture<WinkOperateInstanceJobmanagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinkOperateInstanceJobmanagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinkOperateInstanceJobmanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
