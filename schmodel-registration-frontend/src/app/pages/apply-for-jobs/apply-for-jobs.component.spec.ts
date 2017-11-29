import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyForJobsComponent } from './apply-for-jobs.component';

describe('ApplyForJobsComponent', () => {
  let component: ApplyForJobsComponent;
  let fixture: ComponentFixture<ApplyForJobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplyForJobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyForJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
