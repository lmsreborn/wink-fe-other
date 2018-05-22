import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WinkIdeCodeNavigatorComponent } from './wink-ide-code-navigator.component';

describe('WinkIdeCodeNavigatorComponent', () => {
  let component: WinkIdeCodeNavigatorComponent;
  let fixture: ComponentFixture<WinkIdeCodeNavigatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinkIdeCodeNavigatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinkIdeCodeNavigatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
