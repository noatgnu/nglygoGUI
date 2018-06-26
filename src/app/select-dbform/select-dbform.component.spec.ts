import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectDbformComponent } from './select-dbform.component';

describe('SelectDbformComponent', () => {
  let component: SelectDbformComponent;
  let fixture: ComponentFixture<SelectDbformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectDbformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectDbformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
