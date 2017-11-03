import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditProfileRoutingModule } from './edit-profile-routing.module';
import { EditProfileComponent } from './edit-profile.component';

@NgModule({
  imports: [
    CommonModule,
    EditProfileRoutingModule
  ],
  declarations: [EditProfileComponent]
})
export class EditProfileModule { }
