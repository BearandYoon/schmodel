import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ModalModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { AuthGuard } from './shared';
import { AppRoutingModule } from './app-routing.module';

import { ValidationService } from './shared/services';

import { TermsModalComponent } from "./shared/modules/termsModal/termsModal.component";

@NgModule({
  declarations: [
    AppComponent,
    TermsModalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    ModalModule.forRoot()
  ],
  providers: [
    AuthGuard,
    ValidationService
  ],
  entryComponents: [
    TermsModalComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
