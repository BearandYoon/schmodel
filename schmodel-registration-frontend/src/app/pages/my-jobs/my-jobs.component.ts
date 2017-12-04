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
    public response: any = '';

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
        this.myjobService.getMyJobInfor().subscribe(res => {
            this.response = null;
            this.response = res;
            console.log(res);
        }, error => {
            console.log(error);
        });
    }
}
