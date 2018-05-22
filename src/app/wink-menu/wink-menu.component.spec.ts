import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WinkMenuComponent } from './wink-menu.component';

describe('WinkMenuComponent', () => {
  let component: WinkMenuComponent;
  let fixture: ComponentFixture<WinkMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinkMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinkMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
