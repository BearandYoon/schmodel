import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BsModalService } from "ngx-bootstrap/modal";
import { BsModalRef } from "ngx-bootstrap/modal";

import { routerTransition } from '../../router.animations';
import { DetailDialogComponent } from './components/detail-dialog/detail-dialog.component';

@Component({
  selector: 'app-my-jobs',
  templateUrl: './my-jobs.component.html',
  styleUrls: ['./my-jobs.component.scss'],
  animations: [routerTransition()]
})
export class MyJobsComponent implements OnInit {
  public showDialog = false;
  public style_height: Array<any> = [];
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

  constructor(
    private detailDlgService: BsModalService
  ) {
    this.style_height.push(
      {
        boardHeight: '100vh', bottomHeight: '50vh',
      }, {
        boardHeight: '100%', bottomHeight: '0vh',
      },
    );
  }

  ngOnInit() {
    this.flag = true;

    this.boardHeight = this.style_height[0].boardHeight;
    this.bottomHeight = this.style_height[0].bottomHeight;

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
    this.bottomHeight = this.style_height[1].bottomHeight;
  }

  showDetailDialog(title: string) {
    this.detailDlgRef = this.detailDlgService.show(DetailDialogComponent, this.detailDlgConfig);
    this.detailDlgRef.content.dialogContent = this.detailDlgContent;
    this.detailDlgRef.content.dialogTitle = title;

    this.detailDlgRef.content.onCloseReason.subscribe(result => {
      console.log('Detail Dialog close reason = ', result);
    })
  }
}
