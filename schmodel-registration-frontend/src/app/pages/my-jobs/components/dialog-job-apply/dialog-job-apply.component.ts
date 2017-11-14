import { Component, OnInit } from '@angular/core';

import { BsModalRef } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-dialog-job-apply',
  templateUrl: './dialog-job-apply.component.html',
  styleUrls: ['./dialog-job-apply.component.scss']
})

export class DialogJobApplyComponent implements OnInit {


  public position_field: string = "";
  public city_country_field: string = "";
  public pay_rate_field: string = "";
  public dialogTitle: string = "";
  public onCloseReason: Subject<string>;

  constructor(
    public bsModalRef: BsModalRef
  ) { }

  ngOnInit() {
    this.dialogTitle = "You are applying for:"
    this.onCloseReason = new Subject();
  }

  onConfirm() {
    this.onCloseReason.next('confirm');
    this.bsModalRef.hide();
  }

  onClose() {
    this.onCloseReason.next('close');
    this.bsModalRef.hide();
  }
}