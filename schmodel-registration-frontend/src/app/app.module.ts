import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
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
import { LayoutModule } from './pages/layout/layout.module';
import { DialogDetailComponent } from './pages/apply-for-jobs/components/dialog-detail/dialog-detail..component';
import { DialogJobApplyComponent } from './pages/apply-for-jobs/components/dialog-job-apply/dialog-job-apply.component';
import { DialogWithdrawComponent } from './pages/apply-for-jobs/components/dialog-withdraw/dialog-withdraw.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogDetailComponent,
    DialogJobApplyComponent,
    DialogWithdrawComponent,
    TermsModalComponent,
    MessageModalComponent,
    DialogDetailComponent,
    DialogJobApplyComponent,
    DialogWithdrawComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    LayoutModule,
    HttpClientModule,
    SharedModule,
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
    DialogDetailComponent,
    DialogJobApplyComponent,
    DialogWithdrawComponent,
    TermsModalComponent,
    MessageModalComponent,
    DialogDetailComponent,
    DialogJobApplyComponent,
    DialogWithdrawComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
