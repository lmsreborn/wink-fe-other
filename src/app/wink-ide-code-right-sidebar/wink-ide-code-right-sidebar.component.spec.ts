import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WinkIdeCodeRightSidebarComponent } from './wink-ide-code-right-sidebar.component';

describe('WinkIdeCodeRightSidebarComponent', () => {
  let component: WinkIdeCodeRightSidebarComponent;
  let fixture: ComponentFixture<WinkIdeCodeRightSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinkIdeCodeRightSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinkIdeCodeRightSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
