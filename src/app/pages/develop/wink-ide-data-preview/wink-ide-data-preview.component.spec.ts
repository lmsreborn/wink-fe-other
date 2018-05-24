import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WinkIdeDataPreviewComponent } from './wink-ide-data-preview.component';

describe('WinkIdeDataPreviewComponent', () => {
  let component: WinkIdeDataPreviewComponent;
  let fixture: ComponentFixture<WinkIdeDataPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinkIdeDataPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinkIdeDataPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
