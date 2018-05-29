import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WinkOperateInstanceHeaderComponent } from './wink-operate-instance-header.component';

describe('WinkOperateInstanceHeaderComponent', () => {
  let component: WinkOperateInstanceHeaderComponent;
  let fixture: ComponentFixture<WinkOperateInstanceHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinkOperateInstanceHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinkOperateInstanceHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
