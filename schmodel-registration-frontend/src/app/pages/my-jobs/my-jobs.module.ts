import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyJobsRoutingModule } from './my-jobs-routing.module';
import { MyJobsComponent } from './my-jobs.component';
import { MyJobsButtonComponent } from './components/my-jobs-button/my-jobs-button.component';

@NgModule({
  imports: [
    CommonModule,
    MyJobsRoutingModule,

  ],
  declarations: [MyJobsComponent, MyJobsButtonComponent]
})
export class MyJobsModule { }
