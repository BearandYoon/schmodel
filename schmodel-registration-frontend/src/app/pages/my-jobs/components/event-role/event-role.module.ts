import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EventRoleComponent } from './event-role.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [EventRoleComponent],
  exports: [EventRoleComponent]
})
export class EventRoleModule { }