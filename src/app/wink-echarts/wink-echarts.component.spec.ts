import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WinkEchartsComponent } from './wink-echarts.component';

describe('WinkEchartsComponent', () => {
  let component: WinkEchartsComponent;
  let fixture: ComponentFixture<WinkEchartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinkEchartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinkEchartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
