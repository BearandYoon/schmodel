import { Component, OnInit, HostListener, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import { BsModalService } from "ngx-bootstrap/modal";
import { BsModalRef } from 'ngx-bootstrap/modal';

import { routerTransition } from '../../router.animations';
import { DialogDetailComponent } from './components/dialog-detail/dialog-detail.component';
import { MessageModalComponent } from '../../shared/modules';

import { JobService } from '../../core/services';
import { ValidationMessage } from '../../shared/models';

@Component({
    selector: 'app-apply-for-jobs',
    templateUrl: './apply-for-jobs.component.html',
    styleUrls: ['./apply-for-jobs.component.scss'],
    animations: [routerTransition()],
    encapsulation: ViewEncapsulation.None
})

export class ApplyForJobsComponent implements OnInit {

    public showDialog = false;
    public stickyFlag = false;
    detailDlgRef: BsModalRef;
    detailDlgContent: string;
    detailDlgConfig = {
        animated: true,
        keyboard: true,
        backdrop: true,
        ignoreBackdropClick: false
    };
    public bottomHeight: string = '';
    public roleNames: Array<any> = [];
    public events: Array<any> = [];
    public guestFlag = false;

    constructor(
        private detailDlgService: BsModalService,
        private jobService: JobService
    ) {
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
        this.jobService.getApplyForJobs().subscribe( res => {
            if (res) {
                this.events = res.events;
                this.events.forEach(event => {
                    event.roles.forEach(role => {
                        if (this.roleNames.indexOf(role.name) === -1) {
                            this.roleNames.push(role.name);
                        }
                    });
                });
            } else {
                this.showFailLoadingDialog();
            }
            if (this.roleNames.length === 1) {
                this.guestFlag = true;
            }
        });
    }

    showDetailDialog(index) {
        let title = `${this.roleNames[index]} position`;

        this.detailDlgRef = this.detailDlgService.show(DialogDetailComponent, this.detailDlgConfig);
        this.detailDlgRef.content.dialogContent = this.detailDlgContent;
        this.detailDlgRef.content.dialogTitle = title;

        if(title === 'PR position') {
            this.detailDlgRef.content.dialogContent = ValidationMessage.PR_DESCRIPTION;
        } else if(title === 'Host position') {
            this.detailDlgRef.content.dialogContent = ValidationMessage.HOST_DESCRIPTION;
        } else if(title === 'Grid position') {
            this.detailDlgRef.content.dialogContent = ValidationMessage.GRID_DESCRIPTION;
        } else if(title === 'Schmodel Guest position') {
            this.detailDlgRef.content.dialogContent = ValidationMessage.SCHMODEL_GUEST_DESCRIPTION;
        }

        this.detailDlgRef.content.onCloseReason.subscribe(result => {
            console.log('Detail Dialog close reason = ', result);
        });
    }

    showFailLoadingDialog() {
        this.detailDlgRef = this.detailDlgService.show(MessageModalComponent, this.detailDlgConfig);
        this.detailDlgRef.content.messageContent = ValidationMessage.FAIL_GET_APPLY_FOR_JOBS;
        this.detailDlgRef.content.dialogTitle = "Message";
    }
}
