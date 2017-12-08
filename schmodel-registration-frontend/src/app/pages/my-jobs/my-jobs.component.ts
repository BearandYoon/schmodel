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

    public response: any = '';

    constructor(
        private myjobService: MyJobService
    ) {}

    ngOnInit() {
        const scrollLeft = document.documentElement.scrollLeft;
        window.scrollTo(scrollLeft, 0);
        this.myjobService.getMyJobInfor().subscribe(res => {
            this.response = null;
            this.response = res;
            console.log(res);
        }, error => {
            console.log(error);
        });
    }
}
