import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ClientHomeRoutingModule } from './client-home-routing.module';
import { ClientHomeComponent } from './client-home.component';
import { ClientService } from '../../core/services';

@NgModule({
  imports: [
    CommonModule,
    ClientHomeRoutingModule
  ],
  declarations: [ClientHomeComponent],
  providers: [
    ClientService
  ]
})
export class ClientHomeModule {
}
