import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormArray, FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ProfileService } from '../../../core/services';

@Component({
  selector: 'edit-terms',
  templateUrl: './edit-terms.component.html',
  styleUrls: ['./edit-terms.component.scss']
})
export class EditTermsComponent implements OnInit {
  @Output() collapseSection: EventEmitter<any> = new EventEmitter();

  editTermsForm: FormGroup;
  items: any = [];

  constructor(
    private formBuilder: FormBuilder,
    private profileService: ProfileService
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
    while (this.items.length < clauses.length) {
      this.items.push(this.createItem());
    }
    this.editTermsForm.setValue({
      items: clauses
    });
  }

  onAddTerm() {
    this.items = this.editTermsForm.get('items') as FormArray;
    const itemsLength = this.items.length;
    if (itemsLength && this.items._value[itemsLength - 1].term === '') {
      return;
    }

    this.items.push(this.createItem());
  }

  onRemoveTerm(index) {
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
    }, error => {
      console.log(error);
    });
  }

  onCancel() {
    this.collapseSection.emit();
  }
}
