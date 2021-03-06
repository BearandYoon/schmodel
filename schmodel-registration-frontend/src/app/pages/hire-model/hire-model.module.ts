import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlertModule } from 'ngx-bootstrap';

import { ComponentsModule } from '../../shared/components/components.module';
import { HireModelComponent } from './hire-model.component';
import { HireModelRoutingModule } from './hire-model-routing.module';
import { ProfileService, ClientService } from '../../core/services';
import { TalentItemComponent } from './talent-item/talent-item.component';
import { RoleItemComponent } from './role-item/role-item.component';

@NgModule({
  imports: [
    CommonModule,
    AlertModule,
    HireModelRoutingModule,
    ComponentsModule,
  ],
  declarations: [
    HireModelComponent,
    TalentItemComponent,
    RoleItemComponent
  ],
  providers: [
    ProfileService,
    ClientService
  ]
})
export class HireModelModule { }
