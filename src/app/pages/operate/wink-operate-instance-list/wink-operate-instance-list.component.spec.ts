import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WinkOperateInstanceListComponent } from './wink-operate-instance-list.component';

describe('WinkOperateInstanceListComponent', () => {
  let component: WinkOperateInstanceListComponent;
  let fixture: ComponentFixture<WinkOperateInstanceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinkOperateInstanceListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinkOperateInstanceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
