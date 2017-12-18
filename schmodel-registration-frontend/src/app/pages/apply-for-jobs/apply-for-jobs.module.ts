import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplyForJobsRoutingModule } from './apply-for-jobs-routing.module';
import { ApplyForJobsComponent } from './apply-for-jobs.component';
import { EventRoleComponent } from './components/event-role/event-role.component';
import { EventComponent } from './components/event/event.component';
import { DialogDetailComponent } from './components/dialog-detail/dialog-detail..component';
import { JobService } from '../../core/services';

@NgModule({
  imports: [
    CommonModule,
    ApplyForJobsRoutingModule
  ],
  declarations: [
    ApplyForJobsComponent,
    EventRoleComponent,
    DialogDetailComponent,
    EventComponent
  ],
  providers: [
    JobService
  ]

})
export class ApplyForJobsModule { }
