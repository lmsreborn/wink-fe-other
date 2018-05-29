import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WinkDagreComponent } from './wink-dagre.component';

describe('WinkDagreComponent', () => {
  let component: WinkDagreComponent;
  let fixture: ComponentFixture<WinkDagreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinkDagreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinkDagreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
