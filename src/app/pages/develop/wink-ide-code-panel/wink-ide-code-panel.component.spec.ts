import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WinkIdeCodePanelComponent } from './wink-ide-code-panel.component';

describe('WinkIdeCodePanelComponent', () => {
  let component: WinkIdeCodePanelComponent;
  let fixture: ComponentFixture<WinkIdeCodePanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinkIdeCodePanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinkIdeCodePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
