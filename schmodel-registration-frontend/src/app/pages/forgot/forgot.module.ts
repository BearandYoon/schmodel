import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ForgotRoutingModule } from './forgot-routing.module';
import { ForgotComponent } from './forgot.component';
import { SharedModule } from '../../shared/shared.module';
import { ResetPasswordService } from '../../core/services';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ForgotRoutingModule,
    SharedModule,
  ],
  declarations: [ForgotComponent],
  providers: [
    ResetPasswordService
  ]
})
export class ForgotModule { }
