import { Component, OnInit } from '@angular/core';

import { BsModalRef } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.scss']
})
export class ConfirmModalComponent implements OnInit {
  public position_field: string;
  private talentName: string;
  private companyName: string;
  public city_country_field: string;
  private date_field: string;
  public pay_rate_field: number;
  public dialogTitle: string;
  public onCloseReason: Subject<string>;
  public terms_conditions: string;
  public tc_flag ;
  public workschedule: Array<any> = [];

  constructor(
    public bsModalRef: BsModalRef
  ) { }

  ngOnInit() {
    this.dialogTitle = 'Hiring Confirmation';
    this.talentName = 'LINDSAY-ANNE';
    this.companyName = 'ABC MODEL CO.';
    this.position_field = 'PR';
    this.date_field = '1 January 2017';
    this.city_country_field = 'Marrakesh, Morocco';
    this.pay_rate_field = 1400;
    this.onCloseReason = new Subject();
    this.tc_flag = false;
  }

  onConfirm() {
    this.onCloseReason.next('confirm');
    this.bsModalRef.hide();
  }

  onClose() {
    this.onCloseReason.next('close');
    this.bsModalRef.hide();
  }

  onTC() {
    this.tc_flag = !this.tc_flag;
  }
}
