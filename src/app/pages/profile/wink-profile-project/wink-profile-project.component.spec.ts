import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WinkProfileProjectComponent } from './wink-profile-project.component';

describe('WinkProfileProjectComponent', () => {
  let component: WinkProfileProjectComponent;
  let fixture: ComponentFixture<WinkProfileProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinkProfileProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinkProfileProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
