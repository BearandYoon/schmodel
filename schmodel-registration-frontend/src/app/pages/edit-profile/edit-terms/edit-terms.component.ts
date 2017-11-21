import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

import { ValidationService } from '../../../shared/services';
import { ProfileService } from '../../../core/services';

@Component({
  selector: 'edit-terms',
  templateUrl: './edit-terms.component.html',
  styleUrls: ['./edit-terms.component.scss']
})
export class EditTermsComponent implements OnInit {

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
    })
  }

  ngOnInit() {
    let clauses = this.profileService.profileData.clauses;
    if (!clauses || !clauses.length) {
      clauses = [
        {term: ''}
      ];
    } else {
      clauses = clauses.map(e => ({ term: e }));
    }
    this.items = this.editTermsForm.get('items') as FormArray;
    while(this.items.length < clauses.length) {
      this.items.push(this.createItem());
    }
    this.editTermsForm.setValue({
      items: clauses
    });
  }

  onAddTerm() {
    this.items = this.editTermsForm.get('items') as FormArray;
    this.items.push(this.createItem());
  }

  onRemoveTerm(index) {
    this.items = this.editTermsForm.get('items') as FormArray;
    if (this.items.length > 1) {
      this.items.removeAt(index);
    }
  }

  onSubmit() {
    if (!this.editTermsForm.value) {
      return;
    }

    const data = {
      clauses: this.editTermsForm.value.items.map(e => e.term)
    };
    console.log(data);
    this.profileService.updateTerms(data).subscribe( res => {
    }, error => {
      console.log(error);
    });
  }

}
