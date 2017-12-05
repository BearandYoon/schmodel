import { Component, OnInit, Pipe, ChangeDetectorRef } from '@angular/core';

import { Router } from '@angular/router';
import { ProfileService } from '../../core/services';

@Component({
  selector: 'app-event-calendar',
  templateUrl: './event-calendar.component.html',
  styleUrls: ['./event-calendar.component.scss']
})
export class EventCalendarComponent implements OnInit {

  eventItems: any;
  bgImgUrls: string[];

  constructor(
    public router: Router,
    private profileService: ProfileService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.profileService.getEventCalendar().subscribe(res => {
      this.eventItems = res[0].eventList;
      this.bgImgUrls = [];
      this.eventItems.map(x => {
        this.bgImgUrls.push(this.getRandomImage());
      });
    });
  }

  getRandomImage() {
    const rand = Math.floor(Math.random() * 15);
    return 'url(/assets/img/bg_eventcalendar' + rand + '.png)';
  }

  onEvent(i) {
    this.router.navigate(['client/hire-model'], i);
  }

}
