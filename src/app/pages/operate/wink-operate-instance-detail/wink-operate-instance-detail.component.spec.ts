import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WinkOperateInstanceDetailComponent } from './wink-operate-instance-detail.component';

describe('WinkOperateInstanceDetailComponent', () => {
  let component: WinkOperateInstanceDetailComponent;
  let fixture: ComponentFixture<WinkOperateInstanceDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinkOperateInstanceDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinkOperateInstanceDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
