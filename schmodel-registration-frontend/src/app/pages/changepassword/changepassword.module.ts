import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ChangepasswordRoutingModule } from './changepassword-routing.module';
import { ChangepasswordComponent } from './changepassword.component';
import { AuthenticationService } from '../../core/services';
import { SharedModule } from '../../shared/modules';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        ChangepasswordRoutingModule
    ],
    declarations: [
        ChangepasswordComponent
    ],
    providers: [
      AuthenticationService
    ]
})
export class ChangepasswordModule {
}