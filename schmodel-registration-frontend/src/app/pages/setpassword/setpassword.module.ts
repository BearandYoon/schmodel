import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SetpasswordRoutingModule } from './setpassword-routing.module';
import { SetpasswordComponent } from './setpassword.component';

@NgModule({
  imports: [
    CommonModule,
    SetpasswordRoutingModule
  ],
  declarations: [SetpasswordComponent]
})
export class SetpasswordModule {
}
