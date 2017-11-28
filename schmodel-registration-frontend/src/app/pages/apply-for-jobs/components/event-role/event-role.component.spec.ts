import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventRoleComponent } from './event-role.component';

describe('EventRoleComponent', () => {
  let component: EventRoleComponent;
  let fixture: ComponentFixture<EventRoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventRoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
