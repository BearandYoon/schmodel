import { Component, OnInit, HostListener } from '@angular/core';

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
  race_bg_urls: Array<any> = [];
  bgImgUrls: Array<any> = [];

  constructor(
    public router: Router,
    private profileService: ProfileService,
    private sharedService: SharedService,
  ) {
    this.race_bg_urls.push(
      { imagePath: '/assets/img/bg_r1_2.png' },
      { imagePath: '/assets/img/bg_r3.png' },
      { imagePath: '/assets/img/bg_r4.png' },
      { imagePath: '/assets/img/bg_r5.png' },
      { imagePath: '/assets/img/bg_r6.png' },
      { imagePath: '/assets/img/bg_r7.png' },
      { imagePath: '/assets/img/bg_r8.png' },
      { imagePath: '/assets/img/bg_r9.png' },
      { imagePath: '/assets/img/bg_r10.png' },
      { imagePath: '/assets/img/bg_r11_12.png' },
      { imagePath: '/assets/img/bg_r13_14.png' }
    );
  }

  @HostListener('window:scroll', ['$event'])
  onPageScroll(event) {
      if (event.target.scrollingElement.scrollTop > 60) {
          this.stickyFlag = true;
      } else {
          this.stickyFlag = false;
      }
  }

  ngOnInit() {
    const scrollLeft = document.documentElement.scrollLeft;
    window.scrollTo(scrollLeft, 0);
    this.profileService.getEventCalendar().subscribe(res => {
      this.eventItems = res;

      // race background image urls
      this.bgImgUrls = [];
      this.eventItems.eventList.map((x, index) => {
        this.bgImgUrls.push(this.getImageUrl(index));
      });
    });
  }

  // race background image url
  getImageUrl(ind) {
    const index = ind % 11;
    return 'url(' + this.race_bg_urls[index].imagePath + ')';
  }

  onEvent(i) {
    this.router.navigate(['client/hire-a-schmodel'], { queryParams: { eventId: i }});
  }
}
