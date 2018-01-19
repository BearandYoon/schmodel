import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { HeaderComponent } from './header/header.component';
import { PhoneCodeSelectComponent } from './phone-code-select/phone-code-select.component';
import { ToastComponent } from './toast/toast.component';
import { TextareaAutosizeComponent } from './textarea-autosize/textarea-autosize.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BsDropdownModule.forRoot()
  ],
  declarations: [
    HeaderComponent,
    PhoneCodeSelectComponent,
    ToastComponent,
    TextareaAutosizeComponent
  ],
  exports: [
    HeaderComponent,
    PhoneCodeSelectComponent,
    ToastComponent,
    TextareaAutosizeComponent,
  ]
})
export class ComponentsModule { }
