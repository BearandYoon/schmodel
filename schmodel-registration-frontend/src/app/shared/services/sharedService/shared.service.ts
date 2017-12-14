import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable()
export class SharedService {

  public fromSignup = false;

  constructor() { }


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
