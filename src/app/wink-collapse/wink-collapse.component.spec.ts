import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WinkCollapseComponent } from './wink-collapse.component';

describe('WinkCollapseComponent', () => {
  let component: WinkCollapseComponent;
  let fixture: ComponentFixture<WinkCollapseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinkCollapseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinkCollapseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
