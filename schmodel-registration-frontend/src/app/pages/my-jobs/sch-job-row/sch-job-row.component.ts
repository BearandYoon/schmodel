import { Component, OnInit, Input } from '@angular/core';

import { routerTransition } from '../../../router.animations';

@Component({
  selector: 'app-sch-job-row',
  templateUrl: './sch-job-row.component.html',
  styleUrls: ['./sch-job-row.component.scss'],
  animations: [routerTransition()]
})
export class SchJobRowComponent implements OnInit {

  @Input() event_role: any;

  public isCollapsed = false;

  constructor() { }

  ngOnInit() {
  }
}
