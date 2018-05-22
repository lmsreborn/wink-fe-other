import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WinkHeaderComponent } from './wink-header.component';

describe('WinkHeaderComponent', () => {
  let component: WinkHeaderComponent;
  let fixture: ComponentFixture<WinkHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinkHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinkHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
