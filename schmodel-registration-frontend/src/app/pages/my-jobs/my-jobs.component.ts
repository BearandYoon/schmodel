import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { routerTransition } from '../../router.animations';
import { MyJobService } from '../../core/services';

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
            "startDate": "2018-01-13",
            "endDate": "2018-01-13",
            "city": "Marrakesh",
            "country": "Morocco",
            "role": {
                "id": 0,
                "name": "PR",
                "pay": 1400,
                "workSchedules": [{
                    "day": "2018-01-12",
                    "startTime": "9:00am",
                    "endTime": "5:00pm"
                },
                {
                    "day": "2018-01-13",
                    "startTime": "9:00am",
                    "endTime": "5:00pm"
                },
                {
                    "day": "2018-01-14",
                    "startTime": "9:00am",
                    "endTime": "5:00pm"
                }]
            }
        },
        {
            "id": 0,
            "name": "FE Race 4",
            "startDate": "2018-01-20",
            "endDate": "2018-01-20",
            "city": "Marrakesh",
            "country": "Morocco",
            "role": {
                "id": 0,
                "name": "PR",
                "pay": 1400,
                "workSchedules": [{
                    "day": "2018-01-20",
                    "startTime": "9:00am",
                    "endTime": "5:00pm"
                },
                {
                    "day": "2018-01-20",
                    "startTime": "9:00am",
                    "endTime": "5:00pm"
                }]
            }
        }],
        "previousEvents": [{
            "id": 0,
            "name": "FE Race 1-2",
            "startDate": "2017-12-02",
            "endDate": "2017-12-03",
            "city": "Hong Kong",
            "country": "China",
            "role": {
                "id": 0,
                "name": "PR",
                "pay": 2000,
                "workSchedules": [{
                    "day": "2017-12-01",
                    "startTime": "9:00am",
                    "endTime": "5:00pm"
                },
                {
                    "day": "2017-12-02",
                    "startTime": "9:00am",
                    "endTime": "5:00pm"
                },
                {
                    "day": "2017-12-03",
                    "startTime": "9:00am",
                    "endTime": "5:00pm"
                },
                {
                    "day": "2017-12-04",
                    "startTime": "9:00am",
                    "endTime": "5:00pm"
                }]
            }
        },
        {
            "id": 0,
            "name": "FE Race 0",
            "startDate": "2016-12-02",
            "endDate": "2016-12-03",
            "city": "Hong Kong",
            "country": "China",
            "role": {
                "id": 0,
                "name": "PR",
                "pay": 2000,
                "workSchedules": [{
                    "day": "2016-12-01",
                    "startTime": "9:00am",
                    "endTime": "5:00pm"
                },
                {
                    "day": "2016-12-02",
                    "startTime": "9:00am",
                    "endTime": "5:00pm"
                },
                {
                    "day": "2016-12-03",
                    "startTime": "9:00am",
                    "endTime": "5:00pm"
                },
                {
                    "day": "2016-12-04",
                    "startTime": "9:00am",
                    "endTime": "5:00pm"
                }]
            }
        }]
    }
  ];
  
  constructor(
    private myjobService: MyJobService
  ) {
    this.style_height.push(
      {
        boardHeight: '90vh',
      }, {
        boardHeight: '100%',
      },
    );
    this.flag = true;
    this.boardHeight = '90vh';
  }

  onScrollDown() {
    this.flag = false;
    this.boardHeight = this.style_height[1].boardHeight;
  }

  ngOnInit() {
    this.myjobService.getMyJobInfor().subscribe( res => {
        this.response = null;
        this.response = res;
        console.log("my-jobs : " + res);
      }, error => {
        console.log(error);
    });
  }
}
