import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-my-jobs',
  templateUrl: './my-jobs.component.html',
  styleUrls: ['./my-jobs.component.scss'],
  animations: [routerTransition()]
})
export class MyJobsComponent implements OnInit {

  public sliders: Array<any> = [];
  public url_button = "";

  toggleFlag = 0;

  constructor() {
    this.url_button = 'assets/img/ic_apply.png';

    this.sliders.push({
        imagePath: 'assets/img/ic_apply.png'
    }, {
        imagePath: 'assets/img/ic_checked.png'
    }, {
        imagePath: 'assets/img/ic_disabled.png'
    });
  }

  onToggle() {
    this.toggleFlag = ( this.toggleFlag + 1 ) % 3;
    this.url_button = this.sliders[this.toggleFlag].imagePath;
  }

  ngOnInit() {
  }

}
