import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchInputRowComponent } from './sch-input-row.component';

describe('SchInputRowComponent', () => {
  let component: SchInputRowComponent;
  let fixture: ComponentFixture<SchInputRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchInputRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchInputRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
