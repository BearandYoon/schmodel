import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HireModelComponent } from './hire-model.component';

describe('HireModelComponent', () => {
  let component: HireModelComponent;
  let fixture: ComponentFixture<HireModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HireModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HireModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
