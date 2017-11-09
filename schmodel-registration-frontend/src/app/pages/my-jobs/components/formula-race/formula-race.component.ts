import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { routerTransition } from '../../../../router.animations';

@Component({
  selector: 'app-formula-race',
  templateUrl: './formula-race.component.html',
  styleUrls: ['./formula-race.component.scss'],
  animations: [routerTransition()]
})

export class FormulaRaceComponent implements OnInit {

  private light_blue: string = 'rgba(78, 200, 235, 0.1)';
  private light_purple:string = 'rgba(53, 20, 77, 0.1)';

  public race_bg_urls: Array<any> = [];
  public race_title_style: Array<any> = [];

  public bg_url: string = "";
  public title_border_style: string = "";

  constructor() { 
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
      { imagePath: '/assets/img/bg_r13_14.png' },
    )
  }


  ngOnInit() {
  }

  ngOnChanges() {
    this.bg_url = this.race_bg_urls[this.race_no].imagePath;
    if(this.race_no % 2 == 0)
      this.title_border_style = this.light_blue;
    else
      this.title_border_style = this.light_purple;
  }
  
  @Output() event: EventEmitter<any> = new EventEmitter();
  @Input() race_no: number;               //only for identify the row
  @Input() race_number: string;           //formula race number e.g : R1-2, R3, R4, ....
  @Input() race_date: string;             //formula race date   e.g : Dec. 2-3, 2017,  Jan. 13, 2018, ...
  @Input() race_city: string;             //formula race city   e.g : MARRAKESH, SANTIAGO, MEXICO CITY, ...
  @Input() race_country_code: string;     //formula race country code e.g : CL, MX, BR, ...

  @Input() job_price: string[];           //[job_price] = "['1,400€', '200€', '0', '0']"
  @Input() job_status: number[];          //[job_status] = "[1, 2, 0, 0]", 0:disabled, 1:checked, 2:apply
}
