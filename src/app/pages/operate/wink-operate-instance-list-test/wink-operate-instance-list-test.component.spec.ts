import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WinkOperateInstanceListTestComponent } from './wink-operate-instance-list-test.component';

describe('WinkOperateInstanceListTestComponent', () => {
  let component: WinkOperateInstanceListTestComponent;
  let fixture: ComponentFixture<WinkOperateInstanceListTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinkOperateInstanceListTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinkOperateInstanceListTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
