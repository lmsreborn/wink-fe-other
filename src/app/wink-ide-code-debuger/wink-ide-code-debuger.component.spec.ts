import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WinkIdeCodeDebugerComponent } from './wink-ide-code-debuger.component';

describe('WinkIdeCodeDebugerComponent', () => {
  let component: WinkIdeCodeDebugerComponent;
  let fixture: ComponentFixture<WinkIdeCodeDebugerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinkIdeCodeDebugerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinkIdeCodeDebugerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
