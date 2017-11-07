import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyJobsButtonComponent } from './my-jobs-button.component';

describe('MyJobsButtonComponent', () => {
  let component: MyJobsButtonComponent;
  let fixture: ComponentFixture<MyJobsButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyJobsButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyJobsButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
