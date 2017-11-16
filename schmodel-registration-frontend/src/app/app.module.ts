import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { Ng2Webstorage } from 'ngx-webstorage';

import { AppComponent } from './app.component';
import { AuthGuard } from './shared';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';

import { ValidTokenService } from './core/services';
import { HttpHelperService } from './core/http-helper.service';
import { ApiRoutingService } from './core/api-routing.service';

import { LayoutModule } from './pages/layout/layout.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    Ng2Webstorage,
    SharedModule,
    LayoutModule
  ],
  providers: [
    HttpHelperService,
    ApiRoutingService,
    ValidTokenService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
