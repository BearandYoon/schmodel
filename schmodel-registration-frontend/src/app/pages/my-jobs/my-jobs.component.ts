import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-my-jobs',
  templateUrl: './my-jobs.component.html',
  styleUrls: ['./my-jobs.component.scss'],
  animations: [routerTransition()]
})
export class MyJobsComponent implements OnInit {

  public style_height: Array<any> = [];
  public boardHeight: string = '';
  public flag: boolean;
  public response: Array<any> = [
    {
        "upcomingEvents": [{
            "id": 0,
            "name": "FE Race 3",
            "startDate": "13-01-2018",
            "endDate": "13-01-2018",
            "city": "Marrakesh",
            "country": "Morocco",
            "role": {
                "id": 0,
                "name": "PR",
                "pay": 1400,
                "workSchedules": [{
                    "day": "12-01-2018",
                    "startTime": "9:00am",
                    "endTime": "5:00pm"
                },
                {
                    "day": "13-01-2018",
                    "startTime": "9:00am",
                    "endTime": "5:00pm"
                },
                {
                    "day": "14-01-2018",
                    "startTime": "9:00am",
                    "endTime": "5:00pm"
                }]
            }
        },
        {
            "id": 0,
            "name": "FE Race 4",
            "startDate": "20-01-2018",
            "endDate": "20-01-2018",
            "city": "Marrakesh",
            "country": "Morocco",
            "role": {
                "id": 0,
                "name": "PR",
                "pay": 1400,
                "workSchedules": [{
                    "day": "20-01-2018",
                    "startTime": "9:00am",
                    "endTime": "5:00pm"
                },
                {
                    "day": "20-01-2018",
                    "startTime": "9:00am",
                    "endTime": "5:00pm"
                }]
            }
        }],
        "previousEvents": [{
            "id": 0,
            "name": "FE Race 1-2",
            "startDate": "02-12-2017",
            "endDate": "03-12-2017",
            "city": "Hong Kong",
            "country": "China",
            "role": {
                "id": 0,
                "name": "PR",
                "pay": 2000,
                "workSchedules": [{
                    "day": "01-12-2017",
                    "startTime": "9:00am",
                    "endTime": "5:00pm"
                },
                {
                    "day": "02-12-2017",
                    "startTime": "9:00am",
                    "endTime": "5:00pm"
                },
                {
                    "day": "03-12-2017",
                    "startTime": "9:00am",
                    "endTime": "5:00pm"
                },
                {
                    "day": "04-12-2017",
                    "startTime": "9:00am",
                    "endTime": "5:00pm"
                }]
            }
        },
        {
            "id": 0,
            "name": "FE Race 0",
            "startDate": "02-12-2016",
            "endDate": "03-12-2016",
            "city": "Hong Kong",
            "country": "China",
            "role": {
                "id": 0,
                "name": "PR",
                "pay": 2000,
                "workSchedules": [{
                    "day": "01-12-2016",
                    "startTime": "9:00am",
                    "endTime": "5:00pm"
                },
                {
                    "day": "02-12-2016",
                    "startTime": "9:00am",
                    "endTime": "5:00pm"
                },
                {
                    "day": "03-12-2016",
                    "startTime": "9:00am",
                    "endTime": "5:00pm"
                },
                {
                    "day": "04-12-2016",
                    "startTime": "9:00am",
                    "endTime": "5:00pm"
                }]
            }
        }]
    }
  ];
  
  constructor(
  ) {
    this.style_height.push(
      {
        boardHeight: '90vh',
      }, {
        boardHeight: '100%',
      },
    );
    this.flag = true;
  }

  onScrollDown() {
    this.flag = false;
    this.boardHeight = this.style_height[1].boardHeight;
  }

  ngOnInit() {
  }
}
