import { Component, OnInit, Pipe, ChangeDetectorRef, HostListener } from '@angular/core';
import * as moment from 'moment';

import { Router } from '@angular/router';
import { ProfileService } from '../../core/services';
import { SharedService } from '../../shared/services';

@Component({
  selector: 'app-event-calendar',
  templateUrl: './event-calendar.component.html',
  styleUrls: ['./event-calendar.component.scss']
})
export class EventCalendarComponent implements OnInit {

  stickyFlag = false;
  eventItems: any;
  bgImgUrls: string[];

  constructor(
    public router: Router,
    private profileService: ProfileService,
    private cdr: ChangeDetectorRef,
    private sharedService: SharedService
  ) { }

  @HostListener('window:scroll', ['$event'])
  onPageScroll(event) {
      if(event.target.scrollTop >= 10) {
          this.stickyFlag = true;
      } else {
          this.stickyFlag = false;
      }
  }

  ngOnInit() {
    const scrollLeft = document.documentElement.scrollLeft;
    window.scrollTo(scrollLeft, 0);
    this.profileService.getEventCalendar().subscribe(res => {
      console.log(res);
      this.eventItems = res;
      this.bgImgUrls = [];
      this.eventItems.eventList.map(x => {
        this.bgImgUrls.push(this.getRandomImage());
      });
    });
  }

  getRandomImage() {
    const rand = Math.floor(Math.random() * 15);
    return 'url(/assets/img/bg_eventcalendar' + rand + '.png)';
  }

  onEvent(i) {
    this.router.navigate(['client/hire-a-schmodel'], { queryParams: { eventId: i }});
  }
}
