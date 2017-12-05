import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TalentItemComponent } from './talent-item.component';

describe('TalentItemComponent', () => {
  let component: TalentItemComponent;
  let fixture: ComponentFixture<TalentItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TalentItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TalentItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
