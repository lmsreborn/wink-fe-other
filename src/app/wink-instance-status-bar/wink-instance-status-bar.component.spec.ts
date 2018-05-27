import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WinkInstanceStatusBarComponent } from './wink-instance-status-bar.component';

describe('WinkInstanceStatusBarComponent', () => {
  let component: WinkInstanceStatusBarComponent;
  let fixture: ComponentFixture<WinkInstanceStatusBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinkInstanceStatusBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinkInstanceStatusBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
