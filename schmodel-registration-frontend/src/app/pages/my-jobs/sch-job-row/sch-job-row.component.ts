import { Component, OnInit } from '@angular/core';

import { routerTransition } from '../../../router.animations';

@Component({
  selector: 'app-sch-job-row',
  templateUrl: './sch-job-row.component.html',
  styleUrls: ['./sch-job-row.component.scss'],
  animations: [routerTransition()]
})
export class SchJobRowComponent implements OnInit {

  public isCollapsed = false;

  constructor() { }

  ngOnInit() {
  }

}
