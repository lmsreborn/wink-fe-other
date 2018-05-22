import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WinkRootLayoutComponent } from './wink-root-layout.component';

describe('WinkRootLayoutComponent', () => {
  let component: WinkRootLayoutComponent;
  let fixture: ComponentFixture<WinkRootLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinkRootLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinkRootLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
