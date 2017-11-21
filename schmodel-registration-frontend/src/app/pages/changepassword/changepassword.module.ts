import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ChangepasswordRoutingModule } from './changepassword-routing.module';
import { ChangepasswordComponent } from './changepassword.component';
import { ChangePasswordService } from '../../core/services';
import { ControlMessagesComponent } from '../../shared/modules';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ChangepasswordRoutingModule
    ],
    declarations: [
        ChangepasswordComponent,
        ControlMessagesComponent
    ],
    providers: [
        ChangePasswordService
    ]
})
export class ChangepasswordModule {
}

