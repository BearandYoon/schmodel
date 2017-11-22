import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneCodeSelectComponent } from './phone-code-select.component';

describe('PhoneCodeSelectComponent', () => {
  let component: PhoneCodeSelectComponent;
  let fixture: ComponentFixture<PhoneCodeSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhoneCodeSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneCodeSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
