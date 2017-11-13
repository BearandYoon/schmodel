import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ModalModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { AuthGuard } from './shared';
import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from './pages/layout/layout.module';

import { DetailDialogComponent } from './pages/my-jobs/components/detail-dialog/detail-dialog.component';
import { DialogJobApplyComponent } from './pages/my-jobs/components/dialog-job-apply/dialog-job-apply.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailDialogComponent,
    DialogJobApplyComponent
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
    DetailDialogComponent,
    DialogJobApplyComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
