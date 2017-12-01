import { Component, OnInit } from '@angular/core';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';
import { HireSchmodelClient } from '../../shared/models';

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

  constructor(
    private modalService: BsModalService,
  ) { }

  ngOnInit() {
    const pageTitleDom = document.getElementById('page-title');
    pageTitleDom.style.fontSize = '14px';
    pageTitleDom.innerHTML = '<strong>R3</strong> | Jan. 13, 2018 | <strong>MARRAKESH</strong>, MA';
  }

  confirmHiring() {
    this.confirmModalRef = this.modalService.show(ConfirmModalComponent, this.confirmModalConfig);
    this.confirmModalRef.content.isBtnAgree = false;

    this.confirmModalRef.content.onCloseReason.subscribe(result => {
      console.log('Confirm Modal Close Reason = ', result);
    });
  }
}
