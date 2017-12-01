import { Component, OnInit } from '@angular/core';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';
import hireModelData from './data';

@Component({
  selector: 'app-hire-model',
  templateUrl: './hire-model.component.html',
  styleUrls: ['./hire-model.component.scss']
})
export class HireModelComponent implements OnInit {

  termsModalRef: BsModalRef;
  termsContent: string;
  termsModalConfig = {
    animated: true,
    keyboard: false,
    backdrop: true,
    ignoreBackdropClick: true
  };

  hireModelData: any = {};

  constructor(
    private modalService: BsModalService,
  ) {
    this.transformData(hireModelData);
  }

  ngOnInit() {
    let pageTitleDom = document.getElementById('page-title');
    pageTitleDom.style.fontSize = '14px';
    pageTitleDom.innerHTML = '<strong>R3</strong> | Jan. 13, 2018 | <strong>MARRAKESH</strong>, MA';
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
    console.log(this.hireModelData);
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
      newTalent.errorMessage = "Schmodel's can only be hired for one position, please update.";
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

  confirmHiring() {
    this.termsModalRef = this.modalService.show(ConfirmModalComponent, this.termsModalConfig);
    this.termsModalRef.content.termsContent = this.termsContent;
    this.termsModalRef.content.isBtnAgree = false;

    this.termsModalRef.content.onCloseReason.subscribe(result => {
      console.log('Terms Modal Close Reason = ', result);
    });
  }
}
