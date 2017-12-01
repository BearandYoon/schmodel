import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { Ng2Webstorage } from 'ngx-webstorage';
import { ModalModule, AlertModule } from 'ngx-bootstrap';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/modules';
import { AuthGuard } from './shared';
import { HttpHelperService } from './core/http-helper.service';
import { ApiRoutingService } from './core/api-routing.service';
import { ValidationService, SharedService } from './shared/services';
import { TermsModalComponent } from './shared/modules';
import { MessageModalComponent } from './shared/modules';
import { ConfirmModalComponent } from './pages/hire-model/confirm-modal/confirm-modal.component';
import { LayoutModule } from './pages/layout/layout.module';
import { SwiperModule } from 'angular2-useful-swiper';

@NgModule({
  declarations: [
    AppComponent,
    TermsModalComponent,
    MessageModalComponent,
    ConfirmModalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    SharedModule,
    SwiperModule,
    LayoutModule,
    Ng2Webstorage,
    ModalModule.forRoot(),
    AlertModule.forRoot()
  ],
  providers: [
    HttpHelperService,
    ApiRoutingService,
    AuthGuard,
    ValidationService,
    SharedService
  ],
  entryComponents: [
    TermsModalComponent,
    MessageModalComponent,
    ConfirmModalComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
