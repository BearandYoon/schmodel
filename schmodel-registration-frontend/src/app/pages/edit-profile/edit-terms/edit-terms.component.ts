import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { FormArray, FormGroup, FormBuilder, Validators } from '@angular/forms';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal';

import { TermsModalComponent } from '../../../shared/modules';
import { ProfileService } from '../../../core/services';
import { ValidationMessage } from '../../../shared/models';

@Component({
  selector: 'edit-terms',
  templateUrl: './edit-terms.component.html',
  styleUrls: ['./edit-terms.component.scss']
})
export class EditTermsComponent implements OnInit {
  @Output() collapseSection: EventEmitter<any> = new EventEmitter();

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
  status: any = null;
  untouched = true;

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
    }, {validator: this.validateTerm});
  }

  validateTerm = (f: FormGroup) => {
    const data = f.value;
    const trimmedTerm = data.term.trim();
    if (trimmedTerm.length === 0) {
      return { termInvalid: true };
    }
    return null;
  }

  ngOnInit() {
    this.initializeEditTermsForm();
    this.termsContent = ValidationMessage.TERMS_CONTENT;
    this.status = null;
   }

  initializeEditTermsForm() {
    if (!this.editTermsForm) {
      this.editTermsForm = this.formBuilder.group({
        items: this.formBuilder.array([this.createItem()])
      });
    }

    this.items = [];

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

    if (this.items.length < clauses.length) {
      while (this.items.length < clauses.length) {
        this.items.push(this.createItem());
      }
    } else {
      while (this.items.length > clauses.length) {
        this.items.removeAt(this.items.length - 1);
      }
    }

    this.editTermsForm.setValue({
      items: clauses
    });
  }

  onTC() {
    this.termsModalRef = this.modalService.show(TermsModalComponent, this.termsModalConfig);
    this.termsModalRef.content.termsContent = this.termsContent;
    this.termsModalRef.content.isBtnAgree = true;
    this.termsModalRef.content.isOnlyCancel = true;
  }

  onAddTerm() {
    this.status = null;
    this.items = this.editTermsForm.get('items') as FormArray;
    const itemsLength = this.items.length;
    if (itemsLength && this.items._value[itemsLength - 1].term === '') {
      return;
    }
    this.items.push(this.createItem());
  }

  onChange(event: any) {
    this.status = null;
    this.untouched = false;
  }

  onRemoveTerm(index) {
    this.status = null;
    this.untouched = false;
    this.items = this.editTermsForm.get('items') as FormArray;
    this.items.removeAt(index);
  }

  onSubmit() {
    this.status = null;

    if (!this.editTermsForm.value) {
      return;
    }

    const trimmedItems = this.editTermsForm.value.items.map(e => ({
      ...e,
      term: e.term.trim()
    }));

    this.editTermsForm.setValue({
      items: trimmedItems
    });

    const data = {
      clauses: trimmedItems.map(e => e.term)
    };

    this.profileService.updateTerms(data).subscribe( res => {
      this.status = {
        success: true,
        message: ValidationMessage.TERMS_SAVE_SUCCESS
      };
      this.profileService.getProfileInfo();
    }, error => {
    });
  }

  onCancel() {
    this.initializeEditTermsForm();
    this.status = null;
    this.collapseSection.emit();
    this.untouched = true;
  }
}
