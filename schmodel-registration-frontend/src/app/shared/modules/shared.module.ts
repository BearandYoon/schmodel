import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ControlMessagesComponent } from './control-message/control-message.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ControlMessagesComponent
  ],
  providers: [],
  exports: [
    ControlMessagesComponent
  ],
})
export class SharedModule {
}
