import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WinkIdeRightPanelComponent } from './wink-ide-right-panel.component';

describe('WinkIdeRightPanelComponent', () => {
  let component: WinkIdeRightPanelComponent;
  let fixture: ComponentFixture<WinkIdeRightPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinkIdeRightPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinkIdeRightPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
