import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchInputComponent } from './sch-input.component';

describe('SchInputComponent', () => {
  let component: SchInputComponent;
  let fixture: ComponentFixture<SchInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
