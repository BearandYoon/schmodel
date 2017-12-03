import { Component, OnInit } from '@angular/core';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { LocalStorageService } from 'ngx-webstorage';

import { ClientService } from '../../core/services';
import { HireTalent, TermsModalResponse } from '../../shared/models';
import { environment } from '../../../environments/environment';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';

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

  hireModelData: any = {};

  constructor(
    private modalService: BsModalService,
    private clientService: ClientService,
    private localStorage: LocalStorageService
  ) {
  }

  ngOnInit() {
    this.eventId = 1;
    const pageTitleDom = document.getElementById('page-title');
    pageTitleDom.style.fontSize = '14px';
    pageTitleDom.innerHTML = '<strong>R3</strong> | Jan. 13, 2018 | <strong>MARRAKESH</strong>, MA';

    const data = {
      'eventId': this.eventId,
      'photoWidth': 100,
      'photoHeight': 100
    };

    this.clientService.getHireSchemodel(data).subscribe(res => {
      this.transformData(res);
    }, error => {
      console.log(error);
    });
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
    const { role, talent } = value;
    const talentIndex = this.hireModelData.talents.indexOf(talent);
    const newTalent = Object.assign({}, talent);
    let alreadyLiked = false;
    for (const aRole of newTalent.roles) {
      if (aRole.application && aRole.application.liked) {
        alreadyLiked = true;
        break;
      }
    }
    if (alreadyLiked) {
      newTalent.errorMessage = `Schmodel's can only be hired for one position, please update.`;
    } else {
      role.application.liked = true;
    }
    this.hireModelData.talents.splice(talentIndex, 1, newTalent);
  }

  handleUnlikeTalent(value) {
    const { role, talent } = value;
    const talentIndex = this.hireModelData.talents.indexOf(talent);
    const newTalent = Object.assign({}, talent);
    role.application.liked = false;
    this.hireModelData.talents.splice(talentIndex, 1, newTalent);
  }

  confirmHiring(value) {
    const { talent } = value;

    const hireTalent: HireTalent = new HireTalent;
    const roleId = talent.applications[0].roleId;
    console.log(talent);

    hireTalent.talentName = talent.firstName;
    hireTalent.companyName = this.hireModelData.companyName;
    hireTalent.eventDate = this.hireModelData.eventStartDate;
    hireTalent.country = this.hireModelData.eventCountry;
    hireTalent.city = this.hireModelData.eventCity;
    hireTalent.pay_rate = talent.applications[0].pay;
    hireTalent.clauses = talent.applications[0].clauses;

    this.hireModelData.roles.map(role => {
      if (role.id === roleId) {
        hireTalent.position = role.name;
      }
    });

    this.confirmModalRef = this.modalService.show(ConfirmModalComponent, this.confirmModalConfig);
    this.confirmModalRef.content.hireTalent = hireTalent;

    this.confirmModalRef.content.onCloseReason.subscribe(result => {
      if (result === TermsModalResponse.AGREE) {
        const data = {
          applicationId: talent.applications[0].id,
          ip: this.localStorage.retrieve(environment.localStorage.ipAddress)
        };

        this.clientService.hireTalent(data).subscribe(res => {
          console.log(res);
        }, error => {
          console.log(error);
        });
      }
    });
  }
}
