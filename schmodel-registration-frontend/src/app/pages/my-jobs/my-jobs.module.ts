import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyJobsRoutingModule } from './my-jobs-routing.module';
import { MyJobsComponent } from './my-jobs.component';
import { MyJobsButtonComponent } from './components/my-jobs-button/my-jobs-button.component';
import { FormulaRaceComponent } from './components/formula-race/formula-race.component';

@NgModule({
  imports: [
    CommonModule,
    MyJobsRoutingModule
  ],
  declarations: [MyJobsComponent, MyJobsButtonComponent, FormulaRaceComponent]
})
export class MyJobsModule { }
