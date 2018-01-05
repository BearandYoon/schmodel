import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';

import { routerTransition } from '../../../../router.animations';
import { ValidationMessage } from '../../../../shared/models';
import { SharedService } from '../../../../shared/services';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss'],
  animations: [routerTransition()]
})

export class EventComponent implements OnInit, OnChanges {

  @Input() event_no: number;               // only for identify the row
  @Input() event_number: string;           // formula race number e.g : R1-2, R3, R4, ....
  @Input() event_start_date: string;       // formula race date   e.g : Dec. 2-3, 2017,  Jan. 13, 2018, ...
  @Input() event_end_date: string;         // ----//----
  @Input() event_city: string;             // formula race city   e.g : MARRAKESH, SANTIAGO, MEXICO CITY, ...
  @Input() event_country_code: string;     // formula race country code e.g : CL, MX, BR, ...
  @Input() roles_data: Array<any>;

  public race_bg_urls: Array<any> = [];
  public race_title_style: Array<any> = [];
  public role_ids: number[];
  public role_infor: string[];
  public event_role_status: number[];
  public event_role_price: number[];
  public event_role_workschedule: Array<any> = [];
  public bg_url: string = '';
  public title_border_style: string = '';
  public errorMessage = '';

  private light_blue: string = 'rgba(78, 200, 235, 0.1)';
  private light_purple: string = 'rgba(53, 20, 77, 0.1)';

  constructor(public sharedService: SharedService ) {
    this.race_bg_urls.push(
      { imagePath: '/assets/img/bg_r1_2.png' },
      { imagePath: '/assets/img/bg_r3.png' },
      { imagePath: '/assets/img/bg_r4.png' },
      { imagePath: '/assets/img/bg_r5.png' },
      { imagePath: '/assets/img/bg_r6.png' },
      { imagePath: '/assets/img/bg_r7.png' },
      { imagePath: '/assets/img/bg_r8.png' },
      { imagePath: '/assets/img/bg_r9.png' },
      { imagePath: '/assets/img/bg_r10.png' },
      { imagePath: '/assets/img/bg_r11_12.png' },
      { imagePath: '/assets/img/bg_r13_14.png' }
    );
    this.role_ids = [-1, -1, -1, -1];
    this.role_infor = ["PR", "HOST", "GRID", "SCHMODEL GUEST"];
    this.event_role_status = [0, 0, 0, 0];
    this.event_role_price = [0, 0, 0, 0];
  }

  ngOnInit() {
    for (let i = 0; i < this.roles_data.length; i++) {
      this.role_ids[this.roles_data[i].id - 1] = this.roles_data[i].id;
    }
  }

  ngOnChanges() {

    this.event_city = this.event_city.toUpperCase();
    this.event_number = this.event_number.replace('FE Race ', 'R');

    //race background 
    this.bg_url = this.race_bg_urls[(this.event_no - 1) % 11].imagePath;
    if (this.event_no % 2 === 0) {
      this.title_border_style = this.light_blue;
    } else {
      this.title_border_style = this.light_purple;
    }

    //Event_Role Status
    for (let i = 0; i < this.roles_data.length; i++) {
      this.event_role_workschedule[this.roles_data[i].id - 1] = this.roles_data[i].workSchedules;
      this.event_role_price[this.roles_data[i].id - 1] = this.roles_data[i].pay;

      if (this.roles_data[i].applied == true) {
        this.event_role_status[this.roles_data[i].id - 1] = 1;
      } else {
        this.event_role_status[this.roles_data[i].id - 1] = 2;
      }

      if (this.roles_data[i].hired == true) {
        this.event_role_status = [0, 0, 0, 0];
        this.event_role_status[this.roles_data[i].id - 1] = 3;
        return;
      }
    }
  }

  onCloseMessage() {
  }
}