import { Component, OnInit } from '@angular/core';

import { ProfileService } from '../../core/services';

@Component({
  selector: 'app-event-calendar',
  templateUrl: './event-calendar.component.html',
  styleUrls: ['./event-calendar.component.scss']
})
export class EventCalendarComponent implements OnInit {

  eventItems: any;

  constructor(
    private profileService: ProfileService,
  ) { }

  ngOnInit() {
    this.profileService.getEventCalendar().subscribe(res => {
      this.eventItems = res[0];
    });
  }

}
