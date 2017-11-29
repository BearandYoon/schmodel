import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';

import { ClientLoginRoutingModule } from './client-login-routing.module';
import { ClientLoginComponent } from './client-login.component';
import { SharedModule } from '../../shared/modules';
import { AuthenticationService } from '../../core/services';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ClientLoginRoutingModule,
    SharedModule,
    AlertModule
  ],
  declarations: [
    ClientLoginComponent
  ],
  providers: [
    AuthenticationService
  ],
})
export class ClientLoginModule {
}
