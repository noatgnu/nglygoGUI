import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeNodeDataComponent } from './tree-node-data.component';

describe('TreeNodeDataComponent', () => {
  let component: TreeNodeDataComponent;
  let fixture: ComponentFixture<TreeNodeDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeNodeDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeNodeDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
