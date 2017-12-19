import { Component, OnInit, HostListener, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import { BsModalService } from "ngx-bootstrap/modal";
import { BsModalRef } from "ngx-bootstrap/modal";

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
    public role_title: string[];
    detailDlgRef: BsModalRef;
    detailDlgContent: string;
    detailDlgConfig = {
        animated: true,
        keyboard: true,
        backdrop: true,
        ignoreBackdropClick: false
    };


    public bottomHeight: string = '';

    public eventView: Array<any> = [];

    constructor(
        private detailDlgService: BsModalService,
        private jobService: JobService
    ) {
    }
    
    @HostListener('window:scroll', ['$event'])
    onPageScroll(event) {
        if(event.target.scrollTop >= 10) {
            this.stickyFlag = true;
        } else {
            this.stickyFlag = false;
        }
    }

    ngOnInit() {
        this.jobService.getApplyForJobs((success, response) => {
            if (success) {
                this.eventView = response;
                console.log(response);
            }
            else {
                this.showFailLoadingDialog();
            }
        });
        this.role_title = ["PR", "HOST", "GRID", "SCHMODEL GUEST"];
    }

    showDetailDialog(index) {
        let title = '';
        if (index === 3) {
            title = 'GUEST position';
        } else {
            title = `${this.role_title[index]} position`;
        }

        this.detailDlgRef = this.detailDlgService.show(DialogDetailComponent, this.detailDlgConfig);
        this.detailDlgRef.content.dialogContent = this.detailDlgContent;
        this.detailDlgRef.content.dialogTitle = title;

        if(title === 'PR position') {
            this.detailDlgRef.content.dialogContent = ValidationMessage.PR_DESCRIPTION;	
        } else if(title === 'HOST position') {
            this.detailDlgRef.content.dialogContent = ValidationMessage.HOST_DESCRIPTION;
        } else if(title === 'GRID position') {
            this.detailDlgRef.content.dialogContent = ValidationMessage.GRID_DESCRIPTION;
        } else if(title === 'GUEST position') {
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