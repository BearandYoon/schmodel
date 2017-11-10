import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { routerTransition } from '../../../../router.animations';

enum ButtonStatus { Disabled, Checked, Apply }

@Component({
  selector: 'app-event-role',
  templateUrl: './event-role.component.html',
  styleUrls: ['./event-role.component.scss'],
  animations: [routerTransition()]
})

export class EventRoleComponent implements OnInit{

  // public properties
  public image_url: String = '';   

  private ic_checked: String = '/assets/img/ic_checked.png';
  private ic_apply: String = '/assets/img/ic_apply.png';
  private ic_disabled: String = '/assets/img/ic_disabled.png'

  // Button Status change function
  onToggle(){
    if(this.status == ButtonStatus.Apply) {
      this.status = ButtonStatus.Checked;
      this.image_url = this.ic_checked;
    }

    else if(this.status == ButtonStatus.Checked) {
      this.status = ButtonStatus.Apply;
      this.image_url = this.ic_apply;
    }
    else if(this.status == ButtonStatus.Disabled)
      this.image_url = this.ic_disabled;
  }  

  //constructor
  constructor() {
    this.image_url = this.ic_disabled;
  }

  ngOnChanges(){
    if(this.status == ButtonStatus.Apply) {
      this.status = ButtonStatus.Apply;
      this.image_url = this.ic_apply;
    }

    else if(this.status == ButtonStatus.Checked) {
      this.status = ButtonStatus.Checked;
      this.image_url = this.ic_checked;
    }
    else if(this.status == ButtonStatus.Disabled) {
      this.image_url = this.ic_disabled;
      this.price = '';
    }

    if(this.price == '0') { 
      this.price = '';
    }
  }

  ngOnInit() {}

  
  //Input & Output section
  @Output() event: EventEmitter<any> = new EventEmitter();
  @Input() price: string;
  @Input() status: number;
  @Input()
    get getStatus() {
      return this.status;
    }
}
