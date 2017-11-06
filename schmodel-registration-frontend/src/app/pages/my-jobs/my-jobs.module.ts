import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyJobsRoutingModule } from './my-jobs-routing.module';
import { MyJobsComponent } from './my-jobs.component';

@NgModule({
  imports: [
    CommonModule,
    MyJobsRoutingModule
  ],
  declarations: [MyJobsComponent]
})
export class MyJobsModule { }
