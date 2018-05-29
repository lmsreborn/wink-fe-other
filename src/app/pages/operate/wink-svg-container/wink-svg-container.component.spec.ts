import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WinkSvgContainerComponent } from './wink-svg-container.component';

describe('WinkSvgContainerComponent', () => {
  let component: WinkSvgContainerComponent;
  let fixture: ComponentFixture<WinkSvgContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinkSvgContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinkSvgContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
