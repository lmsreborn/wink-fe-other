import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WinkIdeCodeEditorComponent } from './wink-ide-code-editor.component';

describe('WinkIdeCodeEditorComponent', () => {
  let component: WinkIdeCodeEditorComponent;
  let fixture: ComponentFixture<WinkIdeCodeEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinkIdeCodeEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinkIdeCodeEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
