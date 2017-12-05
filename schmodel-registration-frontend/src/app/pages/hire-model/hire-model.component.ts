import { Component, OnInit } from '@angular/core';

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

  hireModelData: any = {};

  constructor(
    private modalService: BsModalService,
    private clientService: ClientService,
    private localStorage: LocalStorageService
  ) {
  }

  ngOnInit() {
    this.eventId = 1;
    this.message = '';
    const data = {
      'eventId': this.eventId,
      'photoWidth': Math.round(window.innerWidth / 3),
      'photoHeight': Math.round(window.innerWidth / 3)
    };

    this.clientService.getHireSchemodel(data).subscribe(res => {
      this.updateTitle(res);
      this.transformData(res);
    }, error => {
      console.log(error);
    });
  }

  updateTitle(data) {
    const { eventName, eventStartDate, eventEndDate, eventCity, eventCountry } = data;
    const eventDate = moment(eventEndDate, 'YYYY-MM-DD').format('MMM. DD, YYYY');

    const pageTitleDom = document.getElementById('page-title');
    pageTitleDom.style.fontSize = '14px';
    pageTitleDom.innerHTML = `<strong>${eventName}</strong> | ${eventDate} | <strong>${eventCity}</strong>, ${eventCountry}`;
  }

  transformData(data) {
    for (const role of data.roles) {
      role.applicants = 0;
      role.liked = 0;
      role.hired = 0;
      for (const talent of data.talents) {
        for (const application of talent.applications) {
          if (application.roleId === role.id) {
            role.applicants ++;
            if (application.liked) {
              role.liked ++;
              if (talent.hired) {
                role.hired ++;
              }
            }
          }
        }
      }
    }

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

    // add empty column
    data.roles.push({});
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
        role.liked ++;
        this.hireModelData.roles[roleIndex].liked ++;
        this.hireModelData.talents.splice(talentIndex, 1, newTalent);
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
        role.liked --;
        this.hireModelData.roles[roleIndex].liked --;
        this.hireModelData.talents.splice(talentIndex, 1, newTalent);
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
    console.log(talent);

    hireTalent.talentName = talent.firstName;
    hireTalent.companyName = this.hireModelData.companyName;
    hireTalent.eventDate = this.hireModelData.eventStartDate;
    hireTalent.country = this.hireModelData.eventCountry;
    hireTalent.city = this.hireModelData.eventCity;

    let roleId = -1;
    talent.applications.map(application => {
      if (application.liked) {
        roleId = application.id;
        hireTalent.pay_rate = application.pay;
        hireTalent.clauses = application.clauses;

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
          applicationId: roleId,
          ip: this.localStorage.retrieve(environment.localStorage.ipAddress)
        };

        this.clientService.hireTalent(data).subscribe(res => {
          if (res && res.applicationIdValid) {
            talent.hired = true;
          }
        }, error => {
          console.log(error);
          this.message = ValidationMessage.GENERIC_ERROR_MESSAGE;
        });
      }
    });
  }
}
