import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WinkOverviewRootContainerComponent } from './wink-overview-root-container.component';

describe('WinkOverviewRootContainerComponent', () => {
  let component: WinkOverviewRootContainerComponent;
  let fixture: ComponentFixture<WinkOverviewRootContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinkOverviewRootContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinkOverviewRootContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
