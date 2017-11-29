import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchDropdownRowComponent } from './sch-dropdown-row.component';

describe('SchDropdownRowComponent', () => {
  let component: SchDropdownRowComponent;
  let fixture: ComponentFixture<SchDropdownRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchDropdownRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchDropdownRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
