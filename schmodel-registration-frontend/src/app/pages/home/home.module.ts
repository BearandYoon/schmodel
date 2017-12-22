import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ComponentsModule } from '../../shared/components/components.module';
import { SharedModule } from '../../shared/modules';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ProfileService } from '../../core/services';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    ComponentsModule,    
  ],
  declarations: [HomeComponent],
  providers: [
    ProfileService
  ]
})
export class HomeModule {
}
