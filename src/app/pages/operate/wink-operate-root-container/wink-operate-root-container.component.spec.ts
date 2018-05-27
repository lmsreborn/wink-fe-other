import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WinkOperateRootContainerComponent } from './wink-operate-root-container.component';

describe('WinkOperateRootContainerComponent', () => {
  let component: WinkOperateRootContainerComponent;
  let fixture: ComponentFixture<WinkOperateRootContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinkOperateRootContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinkOperateRootContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
