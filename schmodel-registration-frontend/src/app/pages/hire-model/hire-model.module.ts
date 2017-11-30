import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HireModelComponent } from './hire-model.component';

import { HireModelRoutingModule } from './hire-model-routing.module';
import { ProfileService } from '../../core/services';
import { TalentItemComponent } from './talent-item/talent-item.component';
import { RoleItemComponent } from './role-item/role-item.component';

@NgModule({
  imports: [
    CommonModule,
    HireModelRoutingModule
  ],
  declarations: [
    HireModelComponent,
    TalentItemComponent,
    RoleItemComponent
  ],
  providers: [
    ProfileService
  ]
})
export class HireModelModule { }
