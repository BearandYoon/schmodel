import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HireModelComponent } from './hire-model.component';

import { HireModelRoutingModule } from './hire-model-routing.module';
import { ProfileService } from '../../core/services';

@NgModule({
  imports: [
    CommonModule,
    HireModelRoutingModule
  ],
  declarations: [HireModelComponent],
  providers: [
    ProfileService
  ]
})
export class HireModelModule { }
