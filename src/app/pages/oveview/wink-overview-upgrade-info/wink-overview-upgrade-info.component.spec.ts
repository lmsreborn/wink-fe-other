import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WinkOverviewUpgradeInfoComponent } from './wink-overview-upgrade-info.component';

describe('WinkOverviewUpgradeInfoComponent', () => {
  let component: WinkOverviewUpgradeInfoComponent;
  let fixture: ComponentFixture<WinkOverviewUpgradeInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinkOverviewUpgradeInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinkOverviewUpgradeInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
