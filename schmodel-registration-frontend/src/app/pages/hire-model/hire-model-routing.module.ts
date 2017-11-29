import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HireModelComponent } from './hire-model.component';

const routes: Routes = [
  { path: '', component: HireModelComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HireModelRoutingModule { }
