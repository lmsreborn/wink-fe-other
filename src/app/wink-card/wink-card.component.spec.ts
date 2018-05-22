import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WinkCardComponent } from './wink-card.component';

describe('WinkCardComponent', () => {
  let component: WinkCardComponent;
  let fixture: ComponentFixture<WinkCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinkCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinkCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
