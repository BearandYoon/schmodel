import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EventComponent } from './event.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [EventComponent],
  exports: [EventComponent]
})
export class EventModule { }
