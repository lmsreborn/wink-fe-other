import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WinkOverviewInstanceInfoComponent } from './wink-overview-instance-info.component';

describe('WinkOverviewInstanceInfoComponent', () => {
  let component: WinkOverviewInstanceInfoComponent;
  let fixture: ComponentFixture<WinkOverviewInstanceInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinkOverviewInstanceInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinkOverviewInstanceInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
