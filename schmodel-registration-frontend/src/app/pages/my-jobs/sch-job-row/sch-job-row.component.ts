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
  @ViewChild('jobBody') private jobBody: ElementRef;

  public collapse_no = -1;
  public isCollapsed = false;

  constructor(private sharedService: SharedService, private zone: NgZone) { }

  ngOnInit() {
    this.formatAMPM('20:09:00');

    const scrollLeft = document.documentElement.scrollLeft;
    window.scrollTo(scrollLeft, 0);
  }

  ngAfterViewChecked() {
    if(this.isCollapsed) {
      this.scrollToBottom();
    }
  }

  scrollToBottom(): void {
    try {
      this.jobBody.nativeElement.scrollIntoView();
      window.scrollBy(0, this.jobBody.nativeElement.clientHeight);
    } catch (err) { }
  }

  onCollapse(index: number) {
    if (this.collapse_no === index) {
      this.isCollapsed = false;
      this.collapse_no = -1;
    } else {
      this.isCollapsed = true;
      this.collapse_no = index;
    }
    // this.zone.run(() => { console.log("force update")});
    
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
