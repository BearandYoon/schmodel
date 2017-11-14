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

  public showDialog = false;
  detailDlgRef: BsModalRef;
  detailDlgContent: string;
  detailDlgConfig = {
    animated: true,
    keyboard: true,
    backdrop: true,
    ignoreBackdropClick: false
  };


  // Input & Output section
  @Output() event: EventEmitter<any> = new EventEmitter();
  @Input() price: string;
  @Input() status: number;
  @Input()
  get getStatus() {
    return this.status;
  }
  
  public image_url: string = '';
  private ic_checked: string = '/assets/img/ic_checked.png';
  private ic_apply: string = '/assets/img/ic_apply.png';
  private ic_disabled: string = '/assets/img/ic_disabled.png';
  
  openDialogApply(title: string) {
    if (this.status === ButtonStatus.Apply) {
      this.detailDlgRef = this.detailDlgService.show(DialogJobApplyComponent, this.detailDlgConfig);
      this.detailDlgRef.content.dialogTitle = title;
      
      this.detailDlgRef.content.onCloseReason.subscribe(result => {
        console.log('Detail Dialog close reason = ', result);
      })
    } else if (this.status === ButtonStatus.Checked) {
      this.detailDlgRef = this.withdrawDlgService.show(DialogWithdrawComponent, this.detailDlgConfig);
      this.detailDlgRef.content.dialogTitle = title;
      
      this.detailDlgRef.content.onCloseReason.subscribe(result => {
        console.log('Detail Dialog close reason = ', result);
      })
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
      this.price = '';
    }

    if (this.price === '0') {
      this.price = '';
    }
  }
}
