import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchJobRowComponent } from './sch-job-row.component';

describe('SchJobRowComponent', () => {
  let component: SchJobRowComponent;
  let fixture: ComponentFixture<SchJobRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchJobRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchJobRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
