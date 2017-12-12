import { Component, OnInit, Pipe, ChangeDetectorRef } from '@angular/core';
import * as moment from 'moment';


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

 formatEventDate(startDate, endDate) {
    let eventDate = '';
    if (moment(startDate).isSame(endDate)) {
      eventDate = moment(startDate, 'YYYY-MM-D').format('D MMMM YYYY');
    } else {
      eventDate = this.getDifferenceDate(startDate, endDate);
    }

    return eventDate;
  }

  getDifferenceDate(start, end) {
    let period = '';
    if (moment(start).isSame(end, 'year')) {
      if (moment(start).isSame(end, 'month')) {
        period = moment(start).get('date') + ' - ' + moment(end).get('date') + ' ' + moment(start).format('MMMM') + ' ' + moment(start).get('year');
      } else {
        period = moment(start).format('D MMMM') + ' - ' + moment(end).format('D MMMM') + ' ' + moment(start).get('year');
      }
    } else {
      period = moment(start).format('D MMMM YYYY') + ' - ' + moment(end).format('D MMMM YYYY');
    }

    return period;
  }

}
