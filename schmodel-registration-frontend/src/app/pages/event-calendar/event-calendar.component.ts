import { Component, OnInit, Pipe } from '@angular/core';

import { Router } from '@angular/router';
import { ProfileService } from '../../core/services';

@Component({
  selector: 'app-event-calendar',
  templateUrl: './event-calendar.component.html',
  styleUrls: ['./event-calendar.component.scss']
})
export class EventCalendarComponent implements OnInit {

  eventItems: any;

  constructor(
    public router: Router,
    private profileService: ProfileService,
  ) { }

  ngOnInit() {
    this.profileService.getEventCalendar().subscribe(res => {
      console.log(res);
      this.eventItems = res[0].eventList;
    });
  }

  onEvent(i) {
    this.router.navigate(['/hire-schmodel'], i);
  }

}
