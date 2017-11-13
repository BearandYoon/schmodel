import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-dialog-job-apply',
  templateUrl: './dialog-job-apply.component.html',
  styleUrls: ['./dialog-job-apply.component.scss']
})
export class DialogJobApplyComponent implements OnInit {

  constructor(public thisDialogRef: MatDialogRef<DialogJobApplyComponent>, @Inject(MAT_DIALOG_DATA) public data: string) { }

  ngOnInit() {
  }

  onCloseConfirm() {
    this.thisDialogRef.close('Confirm');
  }

  onCloseCancel() {
    this.thisDialogRef.close('Close');
  }
}
