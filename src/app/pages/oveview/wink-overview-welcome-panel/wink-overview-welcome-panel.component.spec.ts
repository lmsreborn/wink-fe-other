import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WinkOverviewWelcomePanelComponent } from './wink-overview-welcome-panel.component';

describe('WinkOverviewWelcomePanelComponent', () => {
  let component: WinkOverviewWelcomePanelComponent;
  let fixture: ComponentFixture<WinkOverviewWelcomePanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinkOverviewWelcomePanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinkOverviewWelcomePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
