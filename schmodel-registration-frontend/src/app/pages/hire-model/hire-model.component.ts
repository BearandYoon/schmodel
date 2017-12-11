import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { LocalStorageService } from 'ngx-webstorage';

import { ClientService } from '../../core/services';
import { HireTalent, TermsModalResponse, ValidationMessage } from '../../shared/models';
import { environment } from '../../../environments/environment';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';
import * as moment from 'moment';

@Component({
  selector: 'app-hire-model',
  templateUrl: './hire-model.component.html',
  styleUrls: ['./hire-model.component.scss']
})
export class HireModelComponent implements OnInit {

  confirmModalRef: BsModalRef;
  confirmModalConfig = {
    animated: true,
    keyboard: false,
    backdrop: true,
    ignoreBackdropClick: true
  };
  eventId: number;
  message: string;
  errorMessage: string;

  hireModelData: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private modalService: BsModalService,
    private clientService: ClientService,
    private localStorage: LocalStorageService
  ) {
  }

  ngOnInit() {
    this.message = '';
    this.route.queryParams.subscribe(res => {
      if (res && res.eventId) {
        this.eventId = res.eventId;

        const data = {
          'eventId': this.eventId,
          'photoWidth': Math.round(window.innerWidth / 3),
          'photoHeight': Math.round(window.innerWidth / 3)
        };

        this.clientService.getHireSchemodel(data).subscribe(response => {
          if (response.eventIdValid) {
            this.updateTitle(response);
            this.transformData(response);
          }
        }, error => {
          console.log(error);
        });
      } else {
        this.router.navigate(['client/event-calendar']);
      }
    });
  }

  updateTitle(data) {
    const { eventName, eventStartDate, eventEndDate, eventCity, eventCountry } = data;
    const eventDate = this.formatEventDate(eventStartDate, eventEndDate);

    const pageTitleDom = document.getElementById('page-title');
    pageTitleDom.innerHTML = `<p style="font-size:14px;margin:0;"><strong>${eventName}</strong> | ${eventDate} | <strong>${eventCity.toUpperCase()}</strong>, ${eventCountry}</p>`;
  }

  formatEventDate(startDate, endDate) {
    let eventDate = '';
    if (moment(startDate).isSame(endDate)) {
      eventDate = moment(startDate, 'YYYY-MM-DD').format('DD MMMM YYYY');
    } else {
      eventDate = this.getDifferenceDate(startDate, endDate);
    }

    return eventDate;
  }

  getDifferenceDate(start, end) {
    let period = '';
    if (moment(start).isSame(end, 'year')) {
      if (moment(start).isSame(end, 'month')) {
        period = moment(start).get('date') + ' - ' + moment(end).get('date') + ' ' + moment(start).format('MMMM') + ' ' + moment(start).get('year');
      } else {
        period = moment(start).format('DD MMMM') + ' ' + moment(end).format('DD MMMM') + ' ' + moment(start).get('year');
      }
    } else {
      period = moment(start).format('DD MMMM YYYY') + ' - ' + moment(end).format('DD MMMM YYYY');
    }

    return period;
  }

  calculateLikesAndHired() {
    const data = this.hireModelData;
    for (const role of data.roles) {
      role.applicants = 0;
      role.liked = 0;
      role.hired = 0;
      for (const talent of data.talents) {
        for (const application of talent.applications) {
          if (application.roleId === role.id) {
            role.applicants ++;
            if (talent.hired) {
              if (application.liked) {
                role.hired ++;
              }
            } else if (application.liked) {
              role.liked ++;
            }
          }
        }
      }
    }

    data.roles = data.roles.slice();
  }

  transformData(data) {
    for (const talent of data.talents) {
      talent.roles = [];
      for (const role of data.roles) {
        const newRole = Object.assign({}, role);
        talent.roles.push(newRole);
        const applications = talent.applications.filter(item => item.roleId === newRole.id);
        if (applications && applications.length) {
          newRole.application = applications[0];
        }
      }
    }
    this.hireModelData = data;

    this.calculateLikesAndHired();
  }

  handleLikeTalent(value) {
    this.message = '';
    const { role, talent } = value;
    const talentIndex = this.hireModelData.talents.indexOf(talent);
    const roleIndex = talent.roles.indexOf(role);
    const newTalent = Object.assign({}, talent);

    this.clientService.likeTalent({ applicationId: role.application.id }).subscribe(res => {
      if (res.applicationIdValid) {
        role.application.liked = true;
        this.calculateLikesAndHired();
      }
    }, error => {
      console.log(error);
    });
  }

  handleUnlikeTalent(value) {
    this.message = '';
    const { role, talent } = value;
    const talentIndex = this.hireModelData.talents.indexOf(talent);
    const roleIndex = talent.roles.indexOf(role);
    const newTalent = Object.assign({}, talent);
    this.clientService.unlikeTalent({ applicationId: role.application.id }).subscribe(res => {
      if (res.applicationIdValid) {
        role.application.liked = false;
        this.calculateLikesAndHired();
      }
    }, error => {
      console.log(error);
    });
  }

  confirmHiring(value) {
    this.message = '';
    const { talent } = value;

    let numLikes = 0;
    for (const aRole of talent.roles) {
      if (aRole.application && aRole.application.liked) {
        numLikes ++;
      }
    }
    if (numLikes >= 2) {
      talent.errorMessage = ValidationMessage.DOUBLE_LIKE_ERROR;
      return;
    }

    const hireTalent: HireTalent = new HireTalent;

    hireTalent.talentName = talent.firstName;
    hireTalent.companyName = this.hireModelData.companyName;
    hireTalent.eventDate = moment(this.hireModelData.eventStartDate, 'YYYY-MM-DD').format('D MMMM YYYY');
    hireTalent.country = this.hireModelData.eventCountry;
    hireTalent.city = this.hireModelData.eventCity;

    let roleId = -1;
    let applicationId = -1;
    talent.applications.map(application => {
      if (application.liked) {
        roleId = application.roleId;
        applicationId = application.id;
        hireTalent.pay_rate = application.pay;
        hireTalent.clauses = application.clauses;
        hireTalent.billingCompanyName = application.billingCompanyName;

        this.hireModelData.roles.map(role => {
          if (role.id === roleId) {
            hireTalent.position = role.name;
          }
        });
      }
    });

    if (roleId === -1) {
      talent.errorMessage = ValidationMessage.NO_LIKE_ERROR_BEFORE_HIRE;
      return;
    }

    this.confirmModalRef = this.modalService.show(ConfirmModalComponent, this.confirmModalConfig);
    this.confirmModalRef.content.hireTalent = hireTalent;

    this.confirmModalRef.content.onCloseReason.subscribe(result => {
      if (result === TermsModalResponse.AGREE) {
        const data = {
          applicationId: applicationId,
          ip: this.localStorage.retrieve(environment.localStorage.ipAddress)
        };

        this.clientService.hireTalent(data).subscribe(res => {
          if (res && res.applicationIdValid) {
            talent.hired = true;
            this.calculateLikesAndHired();
          }
        }, error => {
          console.log(error);
          this.message = ValidationMessage.GENERIC_ERROR_MESSAGE;
        });
      }
    });
  }
}
