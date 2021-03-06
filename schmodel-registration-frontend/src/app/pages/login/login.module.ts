import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { ComponentsModule } from '../../shared/components/components.module';
import { SharedModule } from '../../shared/modules';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LoginRoutingModule,
    ComponentsModule,
    SharedModule,
    AlertModule
  ],
  declarations: [
    LoginComponent
  ]
})
export class LoginModule {
}
