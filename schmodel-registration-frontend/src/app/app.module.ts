import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ModalModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { AuthGuard } from './shared';
import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from './pages/layout/layout.module';

import { DialogDetailComponent } from './pages/my-jobs/components/dialog-detail/dialog-detail..component';
import { DialogJobApplyComponent } from './pages/my-jobs/components/dialog-job-apply/dialog-job-apply.component';
import { DialogWithdrawComponent } from './pages/my-jobs/components/dialog-withdraw/dialog-withdraw.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogDetailComponent,
    DialogJobApplyComponent,
    DialogWithdrawComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    LayoutModule,
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
