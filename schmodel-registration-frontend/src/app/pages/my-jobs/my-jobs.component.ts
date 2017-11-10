import { Component, OnInit, AfterViewChecked, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-my-jobs',
  templateUrl: './my-jobs.component.html',
  styleUrls: ['./my-jobs.component.scss'],
  animations: [routerTransition()]
})
export class MyJobsComponent implements OnInit {

  // @ViewChild('scrollMe') private myScrollContainer: ElementRef;
  public showDialog = false;
  public style_height: Array<any> = [];
  public flag: boolean = false;

  public boardHeight: string ='';
  public bottomHeight: string='';

  constructor() {
    this.style_height.push(
      {
        boardHeight: '100vh', bottomHeight: '50vh',
      }, {
        boardHeight: '100%', bottomHeight: '0vh',
      },
    )
  }

  ngOnInit() {
    this.flag = true;
    this.boardHeight = this.style_height[0].boardHeight;
    this.bottomHeight = this.style_height[0].bottomHeight;
  }

  onScrollDown() {
    this.flag = false;

    this.boardHeight = this.style_height[1].boardHeight;
    this.bottomHeight = this.style_height[1].bottomHeight;
  }
}