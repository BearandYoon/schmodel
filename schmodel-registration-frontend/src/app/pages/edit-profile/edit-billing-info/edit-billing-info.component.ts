import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

import { ProfileService } from '../../../core/services';

@Component({
  selector: 'edit-billing-info',
  templateUrl: './edit-billing-info.component.html',
  styleUrls: ['./edit-billing-info.component.scss']
})
export class EditBillingInfoComponent implements OnInit {

  editBillingForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private profileService: ProfileService
  ) {
    this.editBillingForm = formBuilder.group({
      'company': ['', [Validators.required]],
      'companyRegistrationCountryId': ['', [Validators.required]],
      'companyVatNumber': ['', [Validators.required]],
      'addressLine1': ['', [Validators.required]],
      'addressLine2': ['', [Validators.required]],
      'addressCountryId': ['', [Validators.required]],
      'addressCity': ['', [Validators.required]],
      'addressState': ['', [Validators.required]],
      'addressZipCode': ['', [Validators.required]],
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    const data = this.editBillingForm.value;
    this.profileService.updateBillingInfo(data).subscribe( res => {
      console.log('edit billing = ', res);
    }, error => {
      console.log(error);
    });
  }

}
