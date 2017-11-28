import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ModalModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { AuthGuard } from './shared';
import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from './pages/layout/layout.module';
import { DialogDetailComponent } from './pages/apply-for-jobs/components/dialog-detail/dialog-detail..component';
import { DialogJobApplyComponent } from './pages/apply-for-jobs/components/dialog-job-apply/dialog-job-apply.component';
import { DialogWithdrawComponent } from './pages/apply-for-jobs/components/dialog-withdraw/dialog-withdraw.component';
import { MyJobsComponent } from './pages/my-jobs/my-jobs.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogDetailComponent,
    DialogJobApplyComponent,
    DialogWithdrawComponent,
    MyJobsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    LayoutModule,
    HttpClientModule,
    ModalModule.forRoot()
  ],
  providers: [AuthGuard],
  entryComponents: [
    DialogDetailComponent,
    DialogJobApplyComponent,
    DialogWithdrawComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
