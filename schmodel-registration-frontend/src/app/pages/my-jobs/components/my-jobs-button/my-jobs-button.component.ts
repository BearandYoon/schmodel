import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { routerTransition } from '../../../../router.animations';

enum ButtonStatus { Disabled, Checked, Apply }

@Component({
  selector: 'app-my-jobs-button',
  templateUrl: './my-jobs-button.component.html',
  styleUrls: ['./my-jobs-button.component.scss'],
  animations: [routerTransition()]
})

export class MyJobsButtonComponent implements OnInit{

  // public properties
  public image_url: String = '';   

  // Button Status change function
  onToggle(){
    if(this.status == ButtonStatus.Apply) {
      this.status = ButtonStatus.Checked;
      this.image_url = '/assets/img/ic_checked.png';
    }

    else if(this.status == ButtonStatus.Checked) {
      this.status = ButtonStatus.Apply;
      this.image_url = '/assets/img/ic_apply.png';
    }
    else if(this.status == ButtonStatus.Disabled)
      this.image_url = '/assets/img/ic_disabled.png';
  }  

  //constructor
  constructor() {
    this.image_url = '/assets/img/ic_disabled.png';
  }

  ngOnChanges(){
    if(this.status == ButtonStatus.Apply) {
      this.status = ButtonStatus.Apply;
      this.image_url = '/assets/img/ic_apply.png';
    }

    else if(this.status == ButtonStatus.Checked) {
      this.status = ButtonStatus.Checked;
      this.image_url = '/assets/img/ic_checked.png';
    }
    else if(this.status == ButtonStatus.Disabled) {
      this.image_url = '/assets/img/ic_disabled.png';
      this.price = ' ';
    }

    if(this.price == '0') { 
      this.price = ' ';
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
