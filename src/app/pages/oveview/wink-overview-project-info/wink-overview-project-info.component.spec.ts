import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WinkOverviewProjectInfoComponent } from './wink-overview-project-info.component';

describe('WinkOverviewProjectInfoComponent', () => {
  let component: WinkOverviewProjectInfoComponent;
  let fixture: ComponentFixture<WinkOverviewProjectInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinkOverviewProjectInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinkOverviewProjectInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
