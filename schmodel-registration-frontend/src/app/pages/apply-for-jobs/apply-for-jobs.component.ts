import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BsModalService } from "ngx-bootstrap/modal";
import { BsModalRef } from "ngx-bootstrap/modal";

import { routerTransition } from '../../router.animations';
import { DialogDetailComponent } from './components/dialog-detail/dialog-detail..component';
import { MessageModalComponent } from '../../shared/modules';

import { JobService } from '../../core/services';
import { ValidationMessage } from '../../shared/models';

@Component({
    selector: 'app-apply-for-jobs',
    templateUrl: './apply-for-jobs.component.html',
    styleUrls: ['./apply-for-jobs.component.scss'],
    animations: [routerTransition()]
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
    }

    showDetailDialog(title: string) {
        this.detailDlgRef = this.detailDlgService.show(DialogDetailComponent, this.detailDlgConfig);
        this.detailDlgRef.content.dialogContent = this.detailDlgContent;
        this.detailDlgRef.content.dialogTitle = title;

        this.detailDlgRef.content.onCloseReason.subscribe(result => {
            console.log('Detail Dialog close reason = ', result);
        })
    }

    showFailLoadingDialog() {
        this.detailDlgRef = this.detailDlgService.show(MessageModalComponent, this.detailDlgConfig);
        this.detailDlgRef.content.messageContent = ValidationMessage.FAIL_GET_APPLY_FOR_JOBS;
        this.detailDlgRef.content.dialogTitle = "Message";
    }
}