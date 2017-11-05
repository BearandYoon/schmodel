import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

import { ValidationService } from '../../shared/services';
import { ControlMessagesComponent } from "../../components";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LoginRoutingModule
  ],
  declarations: [
    LoginComponent,
    ControlMessagesComponent
  ],
  providers: [
    ValidationService,
  ],
})
export class LoginModule {
}
