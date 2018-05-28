import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WinkOperateInstanceActionComponent } from './wink-operate-instance-action.component';

describe('WinkOperateInstanceActionComponent', () => {
  let component: WinkOperateInstanceActionComponent;
  let fixture: ComponentFixture<WinkOperateInstanceActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinkOperateInstanceActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinkOperateInstanceActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
