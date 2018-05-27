import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WinkOverviewUserGuideComponent } from './wink-overview-user-guide.component';

describe('WinkOverviewUserGuideComponent', () => {
  let component: WinkOverviewUserGuideComponent;
  let fixture: ComponentFixture<WinkOverviewUserGuideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinkOverviewUserGuideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinkOverviewUserGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
