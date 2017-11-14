import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyJobsRoutingModule } from './my-jobs-routing.module';
import { MyJobsComponent } from './my-jobs.component';
import { EventRoleComponent } from './components/event-role/event-role.component';
import { EventComponent } from './components/event/event.component';

@NgModule({
  imports: [
    CommonModule,
    MyJobsRoutingModule
  ],
  declarations: [
    MyJobsComponent,
    EventRoleComponent,
    EventComponent
  ],
  providers: []

})
export class MyJobsModule { }
