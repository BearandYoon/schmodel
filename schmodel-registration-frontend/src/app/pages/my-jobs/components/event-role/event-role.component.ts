import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';

import { routerTransition } from '../../../../router.animations';

enum ButtonStatus { Disabled, Checked, Apply }

@Component({
  selector: 'app-event-role',
  templateUrl: './event-role.component.html',
  styleUrls: ['./event-role.component.scss'],
  animations: [routerTransition()]
})

export class EventRoleComponent implements OnInit, OnChanges {
  // Input & Output section
  @Output() event: EventEmitter<any> = new EventEmitter();
  @Input() price: string;
  @Input() status: number;
  @Input()
  get getStatus() {
    return this.status;
  }
  // public properties
  public image_url: string = '';

  private ic_checked: string = '/assets/img/ic_checked.png';
  private ic_apply: string = '/assets/img/ic_apply.png';
  private ic_disabled: string = '/assets/img/ic_disabled.png';

  // Button Status change function
  onToggle() {
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

  constructor() {
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
