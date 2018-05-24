import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WinkDevelopRootContainerComponent } from './wink-develop-root-container.component';

describe('WinkDevelopRootContainerComponent', () => {
  let component: WinkDevelopRootContainerComponent;
  let fixture: ComponentFixture<WinkDevelopRootContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinkDevelopRootContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinkDevelopRootContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
