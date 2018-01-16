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
    public isLoading = false;
    public role_type: any = ["upcoming", "previous"];

    constructor(
        private myjobService: MyJobService
    ) { }

    ngOnInit() {
        const scrollLeft = document.documentElement.scrollLeft;
        window.scrollTo(scrollLeft, 0);
        this.isLoading = true;
        this.myjobService.getMyJobInfor().subscribe(res => {
            this.isLoading = false;
            this.response = null;
            this.response = res;
            console.log(res);
        }, error => {
            this.isLoading = false;
            console.log(error);
        });

    }
}
