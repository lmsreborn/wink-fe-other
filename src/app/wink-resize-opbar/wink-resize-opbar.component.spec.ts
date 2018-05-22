import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WinkResizeOpbarComponent } from './wink-resize-opbar.component';

describe('WinkResizeOpbarComponent', () => {
  let component: WinkResizeOpbarComponent;
  let fixture: ComponentFixture<WinkResizeOpbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinkResizeOpbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinkResizeOpbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
