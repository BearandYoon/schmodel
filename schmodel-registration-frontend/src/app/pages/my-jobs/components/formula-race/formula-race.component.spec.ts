import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaRaceComponent } from './formula-race.component';

describe('FormulaRaceComponent', () => {
  let component: FormulaRaceComponent;
  let fixture: ComponentFixture<FormulaRaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulaRaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaRaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
