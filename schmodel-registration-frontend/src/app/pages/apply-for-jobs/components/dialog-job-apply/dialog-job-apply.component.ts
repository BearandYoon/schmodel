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
  public city_field: string = "";
  public country_field: string = "";
  public pay_rate_field: number;
  public dialogTitle: string = "";
  public onCloseReason: Subject<string>;
  public terms_conditions: string = "";
  public tc_flag ;
  public workschedule: Array<any> = [];

  constructor(
    public bsModalRef: BsModalRef
  ) { }

  ngOnInit() {
    this.dialogTitle = "You are applying for:"
    this.onCloseReason = new Subject();
    this.tc_flag = false;
    this.terms_conditions = "As required by Department of Employment regulations, Schmodel’s booking confirmation form, containing the specific terms of the booking, " +
          "must be signed and returned by the client and the signed booking confirmation form together with these terms and conditions shall form the agreement " +
          "between the parties relating to each booking.The failure to sign and/or return the booking confirmation form whilst proceeding with the booking will " +
          "be deemed to be an acceptance by the client of these terms and conditions and they shall apply to and govern the booking between Schmodel and the client. " +
          "Any amendment and/or variations made to the booking confirmation form by the client shall not be valid and binding unless IMG has agreed to such amendment" +
          "and/or variation in advance and confirmed such agreement by signing the booking confirmation form after the amendment and/or variation has been included on " +
          "the booking confirmation form. In the event of any inconsistency or contradiction between these terms and conditions and the booking confirmation form, the " +
          "terms set out in the booking confirmation form shall prevail."
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