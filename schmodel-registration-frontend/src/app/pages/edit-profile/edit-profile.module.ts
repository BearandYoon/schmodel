import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionModule } from 'ngx-bootstrap';

import { EditProfileRoutingModule } from './edit-profile-routing.module';
import { EditProfileComponent } from './edit-profile.component';
import { EditProfilePasswordComponent } from './edit-profile-password/edit-profile-password.component';
import { EditTalentPhotosComponent } from './edit-talent-photos/edit-talent-photos.component';
import { EditPersonalInfoComponent } from './edit-personal-info/edit-personal-info.component';
import { EditTermsComponent } from './edit-terms/edit-terms.component';
import { EditBillingInfoComponent } from './edit-billing-info/edit-billing-info.component';

@NgModule({
  imports: [
    CommonModule,
    AccordionModule.forRoot(),
    EditProfileRoutingModule
  ],
  declarations: [EditProfileComponent, EditProfilePasswordComponent, EditTalentPhotosComponent, EditPersonalInfoComponent, EditTermsComponent, EditBillingInfoComponent]
})
export class EditProfileModule { }
