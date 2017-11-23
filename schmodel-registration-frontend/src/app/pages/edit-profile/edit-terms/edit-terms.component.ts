import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { FormArray, FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal';

import { TermsModalComponent } from '../../../shared/modules';
import { ValidationService } from '../../../shared/services';
import { ProfileService } from '../../../core/services';
import { ValidationMessage } from '../../../shared/models';

@Component({
  selector: 'edit-terms',
  templateUrl: './edit-terms.component.html',
  styleUrls: ['./edit-terms.component.scss']
})
export class EditTermsComponent implements OnInit {
  @Output() collapseSection: EventEmitter<any> = new EventEmitter();

  btnSave: boolean;
  editTermsForm: FormGroup;
  items: any = [];
  termsModalRef: BsModalRef;
  termsContent: string;
  termsModalConfig = {
    animated: true,
    keyboard: false,
    backdrop: true,
    ignoreBackdropClick: true
  };

  constructor(
    private formBuilder: FormBuilder,
    private profileService: ProfileService,
    private modalService: BsModalService,
  ) {
    this.editTermsForm = formBuilder.group({
      items: this.formBuilder.array([this.createItem()])
    });
  }

  createItem() {
    return this.formBuilder.group({
      term: ['', [Validators.required]]
    });
  }

  ngOnInit() {
    let clauses = this.profileService.profileData.clauses;
    if (!clauses || !clauses.length) {
      clauses = [];
    } else {
      clauses = clauses.map(e => ({ term: e }));
    }
    this.items = this.editTermsForm.get('items') as FormArray;
    if (!clauses.length) {
      this.items.removeAt(0);
    }
    while(this.items.length < clauses.length) {
      this.items.push(this.createItem());
    }
    this.editTermsForm.setValue({
      items: clauses
    });
    this.termsContent = ValidationMessage.TERMS_CONTENT;
    this.btnSave = false;
  }

  onTC() {
    this.termsModalRef = this.modalService.show(TermsModalComponent, this.termsModalConfig);
    this.termsModalRef.content.termsContent = this.termsContent;
    this.termsModalRef.content.isBtnAgree = true;
    this.termsModalRef.content.isOnlyCancel = true;
  }

  onAddTerm() {
    this.items = this.editTermsForm.get('items') as FormArray;
    const itemsLength = this.items.length;
    if (itemsLength && this.items._value[itemsLength - 1].term === '') {
      return;
    }
    this.items.push(this.createItem());
  }

  onChange(event: any) {
    this.btnSave = false;
  }

  onRemoveTerm(index) {
    this.btnSave = false;
    this.items = this.editTermsForm.get('items') as FormArray;
    this.items.removeAt(index);
  }

  onSubmit() {
    if (!this.editTermsForm.value) {
      return;
    }

    const data = {
      clauses: this.editTermsForm.value.items.map(e => e.term)
    };
    this.profileService.updateTerms(data).subscribe( res => {
      this.btnSave = true;
    }, error => {
      console.log(error);
    });
  }

  onCancel() {
    this.collapseSection.emit();
  }
}
