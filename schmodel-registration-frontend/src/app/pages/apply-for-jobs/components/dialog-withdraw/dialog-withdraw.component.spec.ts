import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogWithdrawComponent } from './dialog-withdraw.component';

describe('DialogWithdrawComponent', () => {
  let component: DialogWithdrawComponent;
  let fixture: ComponentFixture<DialogWithdrawComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogWithdrawComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogWithdrawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
