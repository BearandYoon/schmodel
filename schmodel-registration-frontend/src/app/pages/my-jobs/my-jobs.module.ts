import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';


import { MyJobsRoutingModule } from './my-jobs-routing.module';
import { MyJobsComponent } from './my-jobs.component';
import { EventRoleComponent } from './components/event-role/event-role.component';
import { EventComponent } from './components/event/event.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { MyDialogComponent } from './components/my-dialog/my-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    MyJobsRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule
  ],

  entryComponents: [
    MyDialogComponent    
  ],
  declarations: [
    MyJobsComponent, 
    EventRoleComponent, 
    EventComponent, 
    DialogComponent, 
    MyDialogComponent
  ],
  providers: []

})
export class MyJobsModule { }
