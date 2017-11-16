import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchDropdownComponent } from './sch-dropdown.component';

describe('SchDropdownComponent', () => {
  let component: SchDropdownComponent;
  let fixture: ComponentFixture<SchDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
