import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ControlMessageComponent } from './components/control-message/control-message.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ControlMessageComponent,
  ],
  providers: [],
  exports: [
    ControlMessageComponent
  ],
})
export class SharedModule {
}
