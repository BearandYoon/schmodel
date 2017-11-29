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
  
  constructor() { }

  ngOnInit() {
  }
}
