import {Component, AfterViewChecked, OnInit, Input, ViewEncapsulation, TemplateRef, ViewChild, ElementRef, NgZone} from '@angular/core';

import { routerTransition } from '../../../router.animations';
import { SharedService } from '../../../shared/services';

@Component({
  selector: 'app-sch-job-row',
  templateUrl: './sch-job-row.component.html',
  styleUrls: ['./sch-job-row.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SchJobRowComponent implements OnInit, AfterViewChecked {

  @Input() event_role: any;
  @Input() event_role_type: string;
  @ViewChild('jobBody') private jobBody: ElementRef;

  public collapse_no = -1;
  public isCollapsed = -1;

  constructor(private sharedService: SharedService, private zone: NgZone) { }

  ngOnInit() {
    this.formatAMPM('20:09:00');

    const scrollLeft = document.documentElement.scrollLeft;
    window.scrollTo(scrollLeft, 0);
  }

  ngAfterViewChecked() {
    if(this.isCollapsed==0) {
      this.isCollapsed  = 1;
      // window.scroll
      console.log('collaped'+this.event_role_type);
      document.getElementById(this.event_role_type+this.collapse_no).scrollIntoView(false);
    }
  }

  scrollToBottom(): void {
    document.getElementById(this.event_role_type+this.collapse_no).scrollIntoView(false);
    // document.getElementById(this.event_role_type+this.collapse_no).scrollTop = 100;
    try {
      console.log(this.event_role_type+this.collapse_no);
      console.log(document.getElementById(this.event_role_type+this.collapse_no));
      
      // window.scrollBy(0, 100);
      // window.scrollBy(0, document.getElementById(this.event_role_type+this.collapse_no).offsetTop);
    } catch (err) { }
  }

  onCollapse(index: number, event: any) {

    console.log(index);
    if (this.collapse_no === index) {
      this.isCollapsed = -1;
      this.collapse_no = -1;
    } else {
      this.isCollapsed = 0;
      this.collapse_no = index;
      // this.scrollToBottom();
    }

  }

  onCollapseSection(sectionTemplate: TemplateRef<any>): void {
    sectionTemplate['isOpen'] = false;
  }

  formatAMPM(timeStr) {
    const tmp = timeStr.split(':');
    let hours = tmp[0];
    const minutes = tmp[1];
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    const strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }
}
