import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccordionModule } from 'ngx-bootstrap';

import { MyJobsRoutingModule } from './my-jobs-routing.module';
import { MyJobsComponent } from './my-jobs.component';
import { SchJobRowComponent } from './sch-job-row/sch-job-row.component';

@NgModule({
  imports: [
    CommonModule,
    MyJobsRoutingModule,
    AccordionModule.forRoot()
  ],
  declarations: [
    MyJobsComponent,
    SchJobRowComponent
  ],
  providers: []
})
export class MyJobsModule { }
