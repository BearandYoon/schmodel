import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { SharedModule } from '../../shared/modules';
import { AuthenticationService } from '../../core/services';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LoginRoutingModule,
    SharedModule
  ],
  declarations: [
    LoginComponent
  ],
  providers: [
    AuthenticationService
  ],
})
export class LoginModule {
}
