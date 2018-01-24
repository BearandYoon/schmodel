import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';

import { ClientLoginRoutingModule } from './client-login-routing.module';
import { ClientLoginComponent } from './client-login.component';
import { ComponentsModule } from '../../shared/components/components.module';
import { SharedModule } from '../../shared/modules';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ClientLoginRoutingModule,
    ComponentsModule,
    SharedModule,
    AlertModule
  ],
  declarations: [
    ClientLoginComponent
  ]
})
export class ClientLoginModule {
}
