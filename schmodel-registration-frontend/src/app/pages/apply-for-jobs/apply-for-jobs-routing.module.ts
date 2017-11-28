import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApplyForJobsComponent } from './apply-for-jobs.component';

const routes: Routes = [
  { path: '', component: ApplyForJobsComponent }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplyForJobsRoutingModule { }