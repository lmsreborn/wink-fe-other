import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WinkIdeLeftPanelComponent } from './wink-ide-left-panel.component';

describe('WinkIdeLeftPanelComponent', () => {
  let component: WinkIdeLeftPanelComponent;
  let fixture: ComponentFixture<WinkIdeLeftPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinkIdeLeftPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinkIdeLeftPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
