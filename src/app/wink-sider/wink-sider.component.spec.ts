import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WinkSiderComponent } from './wink-sider.component';

describe('WinkSiderComponent', () => {
  let component: WinkSiderComponent;
  let fixture: ComponentFixture<WinkSiderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinkSiderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinkSiderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
