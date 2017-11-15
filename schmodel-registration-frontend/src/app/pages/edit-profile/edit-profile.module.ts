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
import { SchInputRowComponent } from './sch-input-row/sch-input-row.component';
import { SchDropdownComponent } from './sch-dropdown/sch-dropdown.component';
import { SchDropdownRowComponent } from './sch-dropdown-row/sch-dropdown-row.component';

@NgModule({
  imports: [
    CommonModule,
    AccordionModule.forRoot(),
    EditProfileRoutingModule
  ],
  declarations: [EditProfileComponent, EditProfilePasswordComponent, EditTalentPhotosComponent, EditPersonalInfoComponent, EditTermsComponent, EditBillingInfoComponent, SchInputRowComponent, SchDropdownComponent, SchDropdownRowComponent]
})
export class EditProfileModule { }
