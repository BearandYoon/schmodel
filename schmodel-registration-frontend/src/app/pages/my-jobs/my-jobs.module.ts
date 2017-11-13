import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { MyJobsRoutingModule } from './my-jobs-routing.module';
import { MyJobsComponent } from './my-jobs.component';
import { EventRoleComponent } from './components/event-role/event-role.component';
import { EventComponent } from './components/event/event.component';
import { DialogWithdrawComponent } from './components/dialog-withdraw/dialog-withdraw.component';

@NgModule({
  imports: [
    CommonModule,
    MyJobsRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
  ],
  declarations: [
    MyJobsComponent,
    EventRoleComponent,
    EventComponent,
    DialogWithdrawComponent
  ],
  providers: []

})
export class MyJobsModule { }
