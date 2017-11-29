import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ClientHomeRoutingModule } from './client-home-routing.module';
import { ClientHomeComponent } from './client-home.component';
import { ProfileService } from '../../core/services';

@NgModule({
  imports: [
    CommonModule,
    ClientHomeRoutingModule
  ],
  declarations: [ClientHomeComponent],
  providers: [
    ProfileService
  ]
})
export class ClientHomeModule {
}
