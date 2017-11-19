import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertModule } from 'ngx-bootstrap';

import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';
import { SharedModule } from '../../shared/modules';
import { AuthenticationService } from '../../core/services';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SignupRoutingModule,
    SharedModule,
    AlertModule
  ],
  declarations: [
    SignupComponent
  ],
  providers: [
    AuthenticationService
  ],
})
export class SignupModule { }
