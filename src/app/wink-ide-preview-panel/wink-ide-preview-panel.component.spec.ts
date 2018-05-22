import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WinkIdePreviewPanelComponent } from './wink-ide-preview-panel.component';

describe('WinkIdePreviewPanelComponent', () => {
  let component: WinkIdePreviewPanelComponent;
  let fixture: ComponentFixture<WinkIdePreviewPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinkIdePreviewPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinkIdePreviewPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
