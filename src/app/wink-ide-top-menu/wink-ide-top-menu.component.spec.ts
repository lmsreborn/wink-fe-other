import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WinkIdeTopMenuComponent } from './wink-ide-top-menu.component';

describe('WinkIdeTopMenuComponent', () => {
  let component: WinkIdeTopMenuComponent;
  let fixture: ComponentFixture<WinkIdeTopMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinkIdeTopMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinkIdeTopMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
