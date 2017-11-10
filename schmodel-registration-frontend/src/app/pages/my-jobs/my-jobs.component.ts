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
  public style_height: string = '';
  public flag: boolean = false;

  constructor() {
    this.style_height = "100vh";
  }

  ngOnInit() {
    this.flag = true;

  }

  onScrollDown() {
    this.flag = false;
    this.style_height = "100%";
  }
  
  
  // this.scrollToBottom();

  // ngAfterViewChecked() {
  //   this.scrollToBottom();
  // }

  // scrollToBottom(): void {
  //   try {
  //     this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
  //   }catch(errr) { }
  // }
}