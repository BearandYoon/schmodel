import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MyJobsButtonComponent } from './my-jobs-button.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [MyJobsButtonComponent],
  exports: [MyJobsButtonComponent]
})
export class MyJobsButtonModule { }