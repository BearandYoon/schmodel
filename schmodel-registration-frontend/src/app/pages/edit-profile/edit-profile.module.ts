import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionModule } from 'ngx-bootstrap';

import { EditProfileRoutingModule } from './edit-profile-routing.module';
import { EditProfileComponent } from './edit-profile.component';

@NgModule({
  imports: [
    CommonModule,
    AccordionModule.forRoot(),
    EditProfileRoutingModule
  ],
  declarations: [EditProfileComponent]
})
export class EditProfileModule { }
