import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ForgotRoutingModule } from './forgot-routing.module';
import { ForgotComponent } from './forgot.component';
import { SharedModule } from '../../shared/modules';
import { AuthenticationService } from '../../core/services';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    ForgotRoutingModule,
  ],
  declarations: [ForgotComponent],
  providers: [
    AuthenticationService
  ]
})
export class ForgotModule { }
