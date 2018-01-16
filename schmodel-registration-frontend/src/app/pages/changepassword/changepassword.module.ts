import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ComponentsModule } from '../../shared/components/components.module';
import { ChangepasswordRoutingModule } from './changepassword-routing.module';
import { ChangepasswordComponent } from './changepassword.component';
import { ProfileService } from '../../core/services';
import { SharedModule } from '../../shared/modules';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ComponentsModule,
        SharedModule,
        ChangepasswordRoutingModule
    ],
    declarations: [
        ChangepasswordComponent
    ],
    providers: [
        ProfileService
    ]
})
export class ChangepasswordModule {
}
