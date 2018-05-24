import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WinkLeftSideContentComponent } from './wink-left-side-content.component';

describe('WinkLeftSideContentComponent', () => {
  let component: WinkLeftSideContentComponent;
  let fixture: ComponentFixture<WinkLeftSideContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinkLeftSideContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinkLeftSideContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
