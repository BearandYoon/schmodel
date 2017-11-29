import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogJobApplyComponent } from './dialog-job-apply.component';

describe('DialogJobApplyComponent', () => {
  let component: DialogJobApplyComponent;
  let fixture: ComponentFixture<DialogJobApplyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogJobApplyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogJobApplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
