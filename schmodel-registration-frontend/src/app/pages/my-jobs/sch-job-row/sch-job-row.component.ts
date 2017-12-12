import { Component, OnInit, Input, ViewEncapsulation, TemplateRef } from '@angular/core';

import { routerTransition } from '../../../router.animations';

@Component({
  selector: 'app-sch-job-row',
  templateUrl: './sch-job-row.component.html',
  styleUrls: ['./sch-job-row.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SchJobRowComponent implements OnInit {

  @Input() event_role: any;

  public collapse_no: number = -1;
  public isCollapsed: boolean = false;

  constructor() { }

  ngOnInit() {
    this.formatAMPM("20:09:00");

    const scrollLeft = document.documentElement.scrollLeft;
    window.scrollTo(scrollLeft, 0);
    console.log(this.event_role);
  }

  onCollapse(index: number) {
    if (this.collapse_no == index) {
      this.isCollapsed = false;
      this.collapse_no = -1;
    } else {
      this.isCollapsed = true;
      this.collapse_no = index;
    }
  }

  onCollapseSection(sectionTemplate: TemplateRef<any>): void {
    sectionTemplate['isOpen'] = false;
  }

  formatAMPM(timeStr) {
    var tmp = timeStr.split(':');
    var hours = tmp[0];
    var minutes = tmp[1];
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }

  ngOnChanges() {
  }
}
