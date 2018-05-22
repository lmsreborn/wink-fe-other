import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WinkFolderTreeComponent } from './wink-folder-tree.component';

describe('WinkFolderTreeComponent', () => {
  let component: WinkFolderTreeComponent;
  let fixture: ComponentFixture<WinkFolderTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinkFolderTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinkFolderTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
