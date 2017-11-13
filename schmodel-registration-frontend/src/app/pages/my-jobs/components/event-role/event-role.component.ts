import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { DialogJobApplyComponent } from '../dialog-job-apply/dialog-job-apply.component';

import { routerTransition } from '../../../../router.animations';

enum ButtonStatus { Disabled, Checked, Apply }

@Component({
  selector: 'app-event-role',
  templateUrl: './event-role.component.html',
  styleUrls: ['./event-role.component.scss'],
  animations: [routerTransition()]
})

export class EventRoleComponent implements OnInit, OnChanges {
  dialogResult = "";

  // Input & Output section
  @Output() event: EventEmitter<any> = new EventEmitter();
  @Input() price: string;
  @Input() status: number;
  @Input()
  get getStatus() {
    return this.status;
  }

  
  public image_url: String = '';

  private ic_checked: String = '/assets/img/ic_checked.png';
  private ic_apply: String = '/assets/img/ic_apply.png';
  private ic_disabled: String = '/assets/img/ic_disabled.png';

  // Button Status change function

  openDialog() {
    let dialogRef = this.dialog.open(DialogJobApplyComponent, {
      width: '80%',
      data: 'This test is passed into the dialog'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog closed': $(result)`);
      this.dialogResult = result;
      if (result === 'Confirm') {
        if (this.status === ButtonStatus.Apply) {
          this.status = ButtonStatus.Checked;
          this.image_url = this.ic_checked;
        } else if (this.status === ButtonStatus.Checked) {
          this.status = ButtonStatus.Apply;
          this.image_url = this.ic_apply;
        } else if (this.status === ButtonStatus.Disabled) {
          this.image_url = this.ic_disabled;
        }
      }
    })
  }

  constructor(public dialog: MatDialog) {
    this.image_url = this.ic_disabled;
  }

  ngOnInit() {}

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
