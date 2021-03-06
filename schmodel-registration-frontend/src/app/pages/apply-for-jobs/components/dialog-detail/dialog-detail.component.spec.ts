import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDetailComponent } from './dialog-detail.component';

describe('TermsModalComponent', () => {
  let component: DialogDetailComponent;
  let fixture: ComponentFixture<DialogDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
