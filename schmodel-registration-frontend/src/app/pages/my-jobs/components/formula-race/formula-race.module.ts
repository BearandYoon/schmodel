import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FormulaRaceComponent } from './formula-race.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [FormulaRaceComponent],
  exports: [FormulaRaceComponent]
})
export class FormulaRaceModule { }
