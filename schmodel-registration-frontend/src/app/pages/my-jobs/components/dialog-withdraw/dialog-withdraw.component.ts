import { Component, OnInit } from '@angular/core';

import { BsModalRef } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-dialog-job-apply',
  templateUrl: './dialog-withdraw.component.html',
  styleUrls: ['./dialog-withdraw.component.scss']
})

export class DialogWithdrawComponent implements OnInit {


  public dialogTitle: string='';
  public onCloseReason: Subject<string>;

  constructor(
    public bsModalRef: BsModalRef
  ) { }

  ngOnInit() {
    this.onCloseReason = new Subject();
  }

  onClose() {
    this.onCloseReason.next('close');
    this.bsModalRef.hide();
  }
}