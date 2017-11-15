import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { BsModalService } from "ngx-bootstrap/modal";
import { BsModalRef } from "ngx-bootstrap/modal";

import { DialogJobApplyComponent } from '../dialog-job-apply/dialog-job-apply.component';
import { DialogWithdrawComponent } from '../dialog-withdraw/dialog-withdraw.component';
import { routerTransition } from '../../../../router.animations';

enum ButtonStatus { Disabled, Checked, Apply }

@Component({
  selector: 'app-event-role',
  templateUrl: './event-role.component.html',
  styleUrls: ['./event-role.component.scss'],
  animations: [routerTransition()]
})

export class EventRoleComponent implements OnInit {

  @Output() event: EventEmitter<any> = new EventEmitter();
  @Input() price: string;
  @Input() city: string;
  @Input() country: string;
  @Input() status: number;
  @Input() position: string;
  @Input()
  get getStatus() {
    return this.status;
  }

  public showDialog = false;
  public detailDlgRef: BsModalRef;
  public jobapplyDlgRef: BsModalRef;
  public withdrawDlgRef: BsModalRef;
  public image_url: string = "";

  private ic_checked: string = "/assets/img/ic_checked.png";
  private ic_apply: string = "/assets/img/ic_apply.png";
  private ic_disabled: string = "/assets/img/ic_disabled.png";
  private dialogConfig = {
    animated: true,
    keyboard: true,
    backdrop: true,
    ignoreBackdropClick: false
  };
  
  openDialog() {
    if (this.status === ButtonStatus.Apply) {
      this.jobapplyDlgRef = this.detailDlgService.show(DialogJobApplyComponent, this.dialogConfig);
      this.jobapplyDlgRef.content.pay_rate_field = this.price;
      this.jobapplyDlgRef.content.position_field = this.position;
      this.jobapplyDlgRef.content.city_country_field = this.city + " " + this.country;
      this.jobapplyDlgRef.content.onCloseReason.subscribe(result => {
        if (result == "confirm") {
          this.status = ButtonStatus.Checked;
          this.ngOnChanges();
        }
      });
    } else if (this.status === ButtonStatus.Checked) {
      this.withdrawDlgRef = this.withdrawDlgService.show(DialogWithdrawComponent, this.dialogConfig);
      this.withdrawDlgRef.content.onCloseReason.subscribe(result => {
        if (result == "confirm") {
          this.status = ButtonStatus.Apply;
          this.ngOnChanges();
        }
      });
    }
  }

  constructor(private detailDlgService:BsModalService, private withdrawDlgService: BsModalService) {
    this.image_url = this.ic_disabled;
  }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.status === ButtonStatus.Apply) {
      this.status = ButtonStatus.Apply;
      this.image_url = this.ic_apply;
    } else if (this.status === ButtonStatus.Checked) {
      this.status = ButtonStatus.Checked;
      this.image_url = this.ic_checked;
    } else if (this.status === ButtonStatus.Disabled) {
      this.image_url = this.ic_disabled;
      this.price = "";
    }

    if (this.price === "0") {
      this.price = "";
    }
  }
}