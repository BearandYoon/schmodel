import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BsModalService } from "ngx-bootstrap/modal";
import { BsModalRef } from "ngx-bootstrap/modal";

import { routerTransition } from '../../router.animations';
import { DialogDetailComponent } from './components/dialog-detail/dialog-detail..component';

import { JobService } from '../../core/services';

@Component({
  selector: 'app-apply-for-jobs',
  templateUrl: './apply-for-jobs.component.html',
  styleUrls: ['./apply-for-jobs.component.scss'],
  animations: [routerTransition()]
})

export class ApplyForJobsComponent implements OnInit {

  public showDialog = false;
  public style_height: Array<any> = [];
  public role_title: string[];
  public flag = false;
  detailDlgRef: BsModalRef;
  detailDlgContent: string;
  detailDlgConfig = {
    animated: true,
    keyboard: true,
    backdrop: true,
    ignoreBackdropClick: false
  };

  public boardHeight: string = '';
  public bottomHeight: string = '';

  public eventView: Array<any> = [
  {
      "id": 1,
      "name": "FE Race 1-2",
      "startDate": "2017-12-02",
      "endDate": "2017-12-02",
      "city": "Hong Kong",
      "country": "Hong Kong",
      "roles": [
          {
              "id": 1,
              "name": "PR",
              "pay": 1500,
              "applied": false,
              "workSchedules": [
                  {
                      "day": "2017-11-30",
                      "startTime": "9:00 AM",
                      "endTime": "5:00 PM"
                  },
                  {
                      "day": "2017-12-01",
                      "startTime": "9:00 AM",
                      "endTime": "5:00 PM"
                  },
                  {
                      "day": "2017-12-02",
                      "startTime": "9:00 AM",
                      "endTime": "5:00 PM"
                  },
                  {
                      "day": "2017-12-03",
                      "startTime": "9:00 AM",
                      "endTime": "5:00 PM"
                  }
              ]
          },
          {
              "id": 4,
              "name": "Schmodel Guest",
              "pay": 0,
              "applied": false,
              "workSchedules": [
                  {
                      "day": "2017-11-30",
                      "startTime": "9:00 AM",
                      "endTime": "5:00 PM"
                  },
                  {
                      "day": "2017-12-01",
                      "startTime": "9:00 AM",
                      "endTime": "5:00 PM"
                  },
                  {
                      "day": "2017-12-02",
                      "startTime": "9:00 AM",
                      "endTime": "5:00 PM"
                  },
                  {
                      "day": "2017-12-03",
                      "startTime": "9:00 AM",
                      "endTime": "5:00 PM"
                  }
              ]
          }
      ]
  },
  {
      "id": 2,
      "name": "FE Race 3",
      "startDate": "2018-01-13",
      "endDate": "2018-01-13",
      "city": "Marrakesh",
      "country": "Morocco",
      "roles": [
          {
              "id": 1,
              "name": "PR",
              "pay": 1500,
              "applied": false,
              "workSchedules": [
                  {
                      "day": "2018-01-13",
                      "startTime": "9:00 AM",
                      "endTime": "5:00 PM"
                  },
                  {
                      "day": "2018-01-14",
                      "startTime": "9:00 AM",
                      "endTime": "5:00 PM"
                  }
              ]
          },
          {
              "id": 2,
              "name": "Host",
              "pay": 700,
              "applied": false,
              "workSchedules": [
                  {
                      "day": "2018-01-13",
                      "startTime": "9:00 AM",
                      "endTime": "5:00 PM"
                  },
                  {
                      "day": "2018-01-14",
                      "startTime": "9:00 AM",
                      "endTime": "5:00 PM"
                  }
              ]
          },
          {
              "id": 3,
              "name": "Grid",
              "pay": 300,
              "applied": false,
              "workSchedules": [
                  {
                      "day": "2018-01-13",
                      "startTime": "9:00 AM",
                      "endTime": "5:00 PM"
                  },
                  {
                      "day": "2018-01-14",
                      "startTime": "9:00 AM",
                      "endTime": "5:00 PM"
                  }
              ]
          },
          {
              "id": 4,
              "name": "Schmodel Guest",
              "pay": 0,
              "applied": false,
              "workSchedules": [
                  {
                      "day": "2018-01-13",
                      "startTime": "9:00 AM",
                      "endTime": "5:00 PM"
                  },
                  {
                      "day": "2018-01-14",
                      "startTime": "9:00 AM",
                      "endTime": "5:00 PM"
                  }
              ]
          }
      ]
  },
  {
      "id": 3,
      "name": "FE Race 4",
      "startDate": "2018-02-03",
      "endDate": "2018-02-03",
      "city": "Santiago",
      "country": "Chile",
      "roles": [
          {
              "id": 1,
              "name": "PR",
              "pay": 1500,
              "applied": false,
              "workSchedules": [
                  {
                      "day": "2018-02-03",
                      "startTime": "9:00 AM",
                      "endTime": "5:00 PM"
                  },
                  {
                      "day": "2018-02-04",
                      "startTime": "9:00 AM",
                      "endTime": "5:00 PM"
                  }
              ]
          },
          {
              "id": 2,
              "name": "Host",
              "pay": 700,
              "applied": false,
              "workSchedules": [
                  {
                      "day": "2018-02-03",
                      "startTime": "9:00 AM",
                      "endTime": "5:00 PM"
                  },
                  {
                      "day": "2018-02-04",
                      "startTime": "9:00 AM",
                      "endTime": "5:00 PM"
                  }
              ]
          },
          {
              "id": 3,
              "name": "Grid",
              "pay": 300,
              "applied": false,
              "workSchedules": [
                  {
                      "day": "2018-02-03",
                      "startTime": "9:00 AM",
                      "endTime": "5:00 PM"
                  },
                  {
                      "day": "2018-02-04",
                      "startTime": "9:00 AM",
                      "endTime": "5:00 PM"
                  }
              ]
          },
          {
              "id": 4,
              "name": "Schmodel Guest",
              "pay": 0,
              "applied": false,
              "workSchedules": [
                  {
                      "day": "2018-02-03",
                      "startTime": "9:00 AM",
                      "endTime": "5:00 PM"
                  },
                  {
                      "day": "2018-02-04",
                      "startTime": "9:00 AM",
                      "endTime": "5:00 PM"
                  }
              ]
          }
      ]
  },
  {
      "id": 4,
      "name": "FE Race 5",
      "startDate": "2018-03-03",
      "endDate": "2018-03-03",
      "city": "Mexico City",
      "country": "Mexico",
      "roles": [
          {
              "id": 1,
              "name": "PR",
              "pay": 1500,
              "applied": false,
              "workSchedules": [
                  {
                      "day": "2018-03-03",
                      "startTime": "9:00 AM",
                      "endTime": "5:00 PM"
                  },
                  {
                      "day": "2018-03-04",
                      "startTime": "9:00 AM",
                      "endTime": "5:00 PM"
                  }
              ]
          },
          {
              "id": 3,
              "name": "Grid",
              "pay": 300,
              "applied": false,
              "workSchedules": [
                  {
                      "day": "2018-03-03",
                      "startTime": "9:00 AM",
                      "endTime": "5:00 PM"
                  },
                  {
                      "day": "2018-03-04",
                      "startTime": "9:00 AM",
                      "endTime": "5:00 PM"
                  }
              ]
          },
          {
              "id": 4,
              "name": "Schmodel Guest",
              "pay": 0,
              "applied": false,
              "workSchedules": [
                  {
                      "day": "2018-03-03",
                      "startTime": "9:00 AM",
                      "endTime": "5:00 PM"
                  },
                  {
                      "day": "2018-03-04",
                      "startTime": "9:00 AM",
                      "endTime": "5:00 PM"
                  }
              ]
          }
      ]
  },
  {
      "id": 5,
      "name": "FE Race 6",
      "startDate": "2018-03-17",
      "endDate": "2018-03-17",
      "city": "Sao Paulo",
      "country": "Brazil",
      "roles": [
          {
              "id": 1,
              "name": "PR",
              "pay": 1500,
              "applied": false,
              "workSchedules": [
                  {
                      "day": "2018-03-17",
                      "startTime": "9:00 AM",
                      "endTime": "5:00 PM"
                  },
                  {
                      "day": "2018-03-18",
                      "startTime": "9:00 AM",
                      "endTime": "5:00 PM"
                  }
              ]
          },
          {
              "id": 2,
              "name": "Host",
              "pay": 700,
              "applied": false,
              "workSchedules": [
                  {
                      "day": "2018-03-17",
                      "startTime": "9:00 AM",
                      "endTime": "5:00 PM"
                  },
                  {
                      "day": "2018-03-18",
                      "startTime": "9:00 AM",
                      "endTime": "5:00 PM"
                  }
              ]
          },
          {
              "id": 3,
              "name": "Grid",
              "pay": 300,
              "applied": false,
              "workSchedules": [
                  {
                      "day": "2018-03-17",
                      "startTime": "9:00 AM",
                      "endTime": "5:00 PM"
                  },
                  {
                      "day": "2018-03-18",
                      "startTime": "9:00 AM",
                      "endTime": "5:00 PM"
                  }
              ]
          },
          {
              "id": 4,
              "name": "Schmodel Guest",
              "pay": 0,
              "applied": false,
              "workSchedules": [
                  {
                      "day": "2018-03-17",
                      "startTime": "9:00 AM",
                      "endTime": "5:00 PM"
                  },
                  {
                      "day": "2018-03-18",
                      "startTime": "9:00 AM",
                      "endTime": "5:00 PM"
                  }
              ]
          }
      ]
  },
  {
      "id": 6,
      "name": "FE Race 7",
      "startDate": "2018-04-14",
      "endDate": "2018-04-14",
      "city": "Rome",
      "country": "Italy",
      "roles": [
          {
              "id": 1,
              "name": "PR",
              "pay": 1500,
              "applied": false,
              "workSchedules": [
                  {
                      "day": "2018-04-14",
                      "startTime": "9:00 AM",
                      "endTime": "5:00 PM"
                  },
                  {
                      "day": "2018-04-15",
                      "startTime": "9:00 AM",
                      "endTime": "5:00 PM"
                  }
              ]
          },
          {
              "id": 2,
              "name": "Host",
              "pay": 700,
              "applied": false,
              "workSchedules": [
                  {
                      "day": "2018-04-14",
                      "startTime": "9:00 AM",
                      "endTime": "5:00 PM"
                  },
                  {
                      "day": "2018-04-15",
                      "startTime": "9:00 AM",
                      "endTime": "5:00 PM"
                  }
              ]
          },
          {
              "id": 3,
              "name": "Grid",
              "pay": 300,
              "applied": false,
              "workSchedules": [
                  {
                      "day": "2018-04-14",
                      "startTime": "9:00 AM",
                      "endTime": "5:00 PM"
                  },
                  {
                      "day": "2018-04-15",
                      "startTime": "9:00 AM",
                      "endTime": "5:00 PM"
                  }
              ]
          },
          {
              "id": 4,
              "name": "Schmodel Guest",
              "pay": 0,
              "applied": false,
              "workSchedules": [
                  {
                      "day": "2018-04-14",
                      "startTime": "9:00 AM",
                      "endTime": "5:00 PM"
                  },
                  {
                      "day": "2018-04-15",
                      "startTime": "9:00 AM",
                      "endTime": "5:00 PM"
                  }
              ]
          }
      ]
  },
  {
      "id": 7,
      "name": "FE Race 8",
      "startDate": "2018-04-28",
      "endDate": "2018-04-28",
      "city": "Paris",
      "country": "France",
      "roles": [
          {
              "id": 2,
              "name": "Host",
              "pay": 700,
              "applied": false,
              "workSchedules": [
                  {
                      "day": "2018-04-28",
                      "startTime": "9:00 AM",
                      "endTime": "5:00 PM"
                  },
                  {
                      "day": "2018-04-29",
                      "startTime": "9:00 AM",
                      "endTime": "5:00 PM"
                  }
              ]
          },
          {
              "id": 3,
              "name": "Grid",
              "pay": 300,
              "applied": false,
              "workSchedules": [
                  {
                      "day": "2018-04-28",
                      "startTime": "9:00 AM",
                      "endTime": "5:00 PM"
                  },
                  {
                      "day": "2018-04-29",
                      "startTime": "9:00 AM",
                      "endTime": "5:00 PM"
                  }
              ]
          },
          {
              "id": 4,
              "name": "Schmodel Guest",
              "pay": 0,
              "applied": false,
              "workSchedules": [
                  {
                      "day": "2018-04-28",
                      "startTime": "9:00 AM",
                      "endTime": "5:00 PM"
                  },
                  {
                      "day": "2018-04-29",
                      "startTime": "9:00 AM",
                      "endTime": "5:00 PM"
                  }
              ]
          }
      ]
  },
  {
      "id": 8,
      "name": "FE Race 9",
      "startDate": "2018-05-19",
      "endDate": "2018-05-19",
      "city": "Berlin",
      "country": "Germany",
      "roles": [
          {
              "id": 1,
              "name": "PR",
              "pay": 1500,
              "applied": false,
              "workSchedules": [
                  {
                      "day": "2018-05-19",
                      "startTime": "9:00 AM",
                      "endTime": "5:00 PM"
                  },
                  {
                      "day": "2018-05-20",
                      "startTime": "9:00 AM",
                      "endTime": "5:00 PM"
                  }
              ]
          },
          {
              "id": 2,
              "name": "Host",
              "pay": 700,
              "applied": false,
              "workSchedules": [
                  {
                      "day": "2018-05-19",
                      "startTime": "9:00 AM",
                      "endTime": "5:00 PM"
                  },
                  {
                      "day": "2018-05-20",
                      "startTime": "9:00 AM",
                      "endTime": "5:00 PM"
                  }
              ]
          },
          {
              "id": 3,
              "name": "Grid",
              "pay": 300,
              "applied": false,
              "workSchedules": [
                  {
                      "day": "2018-05-19",
                      "startTime": "9:00 AM",
                      "endTime": "5:00 PM"
                  },
                  {
                      "day": "2018-05-20",
                      "startTime": "9:00 AM",
                      "endTime": "5:00 PM"
                  }
              ]
          },
          {
              "id": 4,
              "name": "Schmodel Guest",
              "pay": 0,
              "applied": false,
              "workSchedules": [
                  {
                      "day": "2018-05-19",
                      "startTime": "9:00 AM",
                      "endTime": "5:00 PM"
                  },
                  {
                      "day": "2018-05-20",
                      "startTime": "9:00 AM",
                      "endTime": "5:00 PM"
                  }
              ]
          }
      ]
  },
  {
      "id": 9,
      "name": "FE Race 10",
      "startDate": "2018-06-10",
      "endDate": "2018-06-10",
      "city": "Zurich",
      "country": "Switzerland",
      "roles": [
          {
              "id": 1,
              "name": "PR",
              "pay": 1500,
              "applied": false,
              "workSchedules": [
                  {
                      "day": "2018-06-10",
                      "startTime": "9:00 AM",
                      "endTime": "5:00 PM"
                  },
                  {
                      "day": "2018-06-11",
                      "startTime": "9:00 AM",
                      "endTime": "5:00 PM"
                  }
              ]
          },
          {
              "id": 2,
              "name": "Host",
              "pay": 700,
              "applied": false,
              "workSchedules": [
                  {
                      "day": "2018-06-10",
                      "startTime": "9:00 AM",
                      "endTime": "5:00 PM"
                  },
                  {
                      "day": "2018-06-11",
                      "startTime": "9:00 AM",
                      "endTime": "5:00 PM"
                  }
              ]
          },
          {
              "id": 3,
              "name": "Grid",
              "pay": 300,
              "applied": false,
              "workSchedules": [
                  {
                      "day": "2018-06-10",
                      "startTime": "9:00 AM",
                      "endTime": "5:00 PM"
                  },
                  {
                      "day": "2018-06-11",
                      "startTime": "9:00 AM",
                      "endTime": "5:00 PM"
                  }
              ]
          },
          {
              "id": 4,
              "name": "Schmodel Guest",
              "pay": 0,
              "applied": false,
              "workSchedules": [
                  {
                      "day": "2018-06-10",
                      "startTime": "9:00 AM",
                      "endTime": "5:00 PM"
                  },
                  {
                      "day": "2018-06-11",
                      "startTime": "9:00 AM",
                      "endTime": "5:00 PM"
                  }
              ]
          }
      ]
  },
  {
      "id": 10,
      "name": "FE Race 11-12",
      "startDate": "2018-07-14",
      "endDate": "2018-07-14",
      "city": "New York",
      "country": "United States",
      "roles": [
          {
              "id": 1,
              "name": "PR",
              "pay": 1500,
              "applied": false,
              "workSchedules": [
                  {
                      "day": "2018-07-12",
                      "startTime": "9:00 AM",
                      "endTime": "5:00 PM"
                  },
                  {
                      "day": "2018-07-13",
                      "startTime": "9:00 AM",
                      "endTime": "5:00 PM"
                  },
                  {
                      "day": "2018-07-14",
                      "startTime": "9:00 AM",
                      "endTime": "5:00 PM"
                  },
                  {
                      "day": "2018-07-15",
                      "startTime": "9:00 AM",
                      "endTime": "5:00 PM"
                  }
              ]
          },
          {
              "id": 2,
              "name": "Host",
              "pay": 700,
              "applied": false,
              "workSchedules": [
                  {
                      "day": "2018-07-12",
                      "startTime": "9:00 AM",
                      "endTime": "5:00 PM"
                  },
                  {
                      "day": "2018-07-13",
                      "startTime": "9:00 AM",
                      "endTime": "5:00 PM"
                  },
                  {
                      "day": "2018-07-14",
                      "startTime": "9:00 AM",
                      "endTime": "5:00 PM"
                  },
                  {
                      "day": "2018-07-15",
                      "startTime": "9:00 AM",
                      "endTime": "5:00 PM"
                  }
              ]
          },
          {
              "id": 3,
              "name": "Grid",
              "pay": 300,
              "applied": false,
              "workSchedules": [
                  {
                      "day": "2018-07-12",
                      "startTime": "9:00 AM",
                      "endTime": "5:00 PM"
                  },
                  {
                      "day": "2018-07-13",
                      "startTime": "9:00 AM",
                      "endTime": "5:00 PM"
                  },
                  {
                      "day": "2018-07-14",
                      "startTime": "9:00 AM",
                      "endTime": "5:00 PM"
                  },
                  {
                      "day": "2018-07-15",
                      "startTime": "9:00 AM",
                      "endTime": "5:00 PM"
                  }
              ]
          },
          {
              "id": 4,
              "name": "Schmodel Guest",
              "pay": 0,
              "applied": false,
              "workSchedules": [
                  {
                      "day": "2018-07-12",
                      "startTime": "9:00 AM",
                      "endTime": "5:00 PM"
                  },
                  {
                      "day": "2018-07-13",
                      "startTime": "9:00 AM",
                      "endTime": "5:00 PM"
                  },
                  {
                      "day": "2018-07-14",
                      "startTime": "9:00 AM",
                      "endTime": "5:00 PM"
                  },
                  {
                      "day": "2018-07-15",
                      "startTime": "9:00 AM",
                      "endTime": "5:00 PM"
                  }
              ]
          }
      ]
  },
  {
      "id": 11,
      "name": "FE Race 13-14",
      "startDate": "2018-07-28",
      "endDate": "2018-07-28",
      "city": "Montreal",
      "country": "Canada",
      "roles": [
          {
              "id": 1,
              "name": "PR",
              "pay": 1500,
              "applied": false,
              "workSchedules": [
                  {
                      "day": "2018-07-12",
                      "startTime": "9:00 AM",
                      "endTime": "5:00 PM"
                  },
                  {
                      "day": "2018-07-13",
                      "startTime": "9:00 AM",
                      "endTime": "5:00 PM"
                  },
                  {
                      "day": "2018-07-14",
                      "startTime": "9:00 AM",
                      "endTime": "5:00 PM"
                  },
                  {
                      "day": "2018-07-15",
                      "startTime": "9:00 AM",
                      "endTime": "5:00 PM"
                  }
              ]
          },
          {
              "id": 2,
              "name": "Host",
              "pay": 700,
              "applied": false,
              "workSchedules": [
                  {
                      "day": "2018-07-12",
                      "startTime": "9:00 AM",
                      "endTime": "5:00 PM"
                  },
                  {
                      "day": "2018-07-13",
                      "startTime": "9:00 AM",
                      "endTime": "5:00 PM"
                  },
                  {
                      "day": "2018-07-14",
                      "startTime": "9:00 AM",
                      "endTime": "5:00 PM"
                  },
                  {
                      "day": "2018-07-15",
                      "startTime": "9:00 AM",
                      "endTime": "5:00 PM"
                  }
              ]
          },
          {
              "id": 3,
              "name": "Grid",
              "pay": 300,
              "applied": false,
              "workSchedules": [
                  {
                      "day": "2018-07-12",
                      "startTime": "9:00 AM",
                      "endTime": "5:00 PM"
                  },
                  {
                      "day": "2018-07-13",
                      "startTime": "9:00 AM",
                      "endTime": "5:00 PM"
                  },
                  {
                      "day": "2018-07-14",
                      "startTime": "9:00 AM",
                      "endTime": "5:00 PM"
                  },
                  {
                      "day": "2018-07-15",
                      "startTime": "9:00 AM",
                      "endTime": "5:00 PM"
                  }
              ]
          },
          {
              "id": 4,
              "name": "Schmodel Guest",
              "pay": 0,
              "applied": false,
              "workSchedules": [
                  {
                      "day": "2018-07-12",
                      "startTime": "9:00 AM",
                      "endTime": "5:00 PM"
                  },
                  {
                      "day": "2018-07-13",
                      "startTime": "9:00 AM",
                      "endTime": "5:00 PM"
                  },
                  {
                      "day": "2018-07-14",
                      "startTime": "9:00 AM",
                      "endTime": "5:00 PM"
                  },
                  {
                      "day": "2018-07-15",
                      "startTime": "9:00 AM",
                      "endTime": "5:00 PM"
                  }
              ]
          }
      ]
  }
  ];

  constructor(
    private detailDlgService: BsModalService,
    private jobService: JobService
  ) {
    this.style_height.push(
      {
        boardHeight: '90vh',
      }, {
        boardHeight: '100%',
      },
    );
  }

  ngOnInit() {
    this.flag = true;
    this.boardHeight = this.style_height[0].boardHeight;
    this.role_title = ["PR", "HOST", "GRID", "SCHMODEL GUEST"];
    this.detailDlgContent = 'A Schmodel PR (sometimes also called a Brand Ambassador) is a person who is hired by an organization' +
      ' or company to represent a brand in a positive light and by doing so help to increase brand awareness and sales. ' +
      'The brand ambassador is meant to embody the corporate identity in appearance, demeanor, values and ethics. ' +
      'The key element of brand ambassadors is their ability to use promotional strategies that ' +
      'will strengthen the customer-product-service relationship and influence a large audience to buy and consume more. ' +
      'Predominantly, a brand ambassador is known as a positive spokesperson, ' +
      'an opinion leader or a community influencer, appointed as an internal or external agent to boost product or service sales ' +
      'and create brand awareness. Today, brand ambassador as a term has expanded beyond celebrity branding ' +
      'to self-branding or personal brand management. Professional figures such as good-will and non-profit ambassadors, ' +
      'promotional models, testimonials and brand advocates have formed as an extension of the same concept, ' +
      'taking into account the requirements of every company.';
  }

  onScrollDown() {
    this.flag = false;
    this.boardHeight = this.style_height[1].boardHeight;
  }

  showDetailDialog(title: string) {
    this.detailDlgRef = this.detailDlgService.show(DialogDetailComponent, this.detailDlgConfig);
    this.detailDlgRef.content.dialogContent = this.detailDlgContent;
    this.detailDlgRef.content.dialogTitle = title;

    this.detailDlgRef.content.onCloseReason.subscribe(result => {
      console.log('Detail Dialog close reason = ', result);
    })
  }
}