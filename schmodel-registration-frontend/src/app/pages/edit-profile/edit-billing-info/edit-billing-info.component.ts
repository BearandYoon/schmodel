import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ProfileService } from '../../../core/services';

@Component({
  selector: 'edit-billing-info',
  templateUrl: './edit-billing-info.component.html',
  styleUrls: ['./edit-billing-info.component.scss']
})
export class EditBillingInfoComponent implements OnInit {

  @Output() collapseSection: EventEmitter<any> = new EventEmitter();
  editBillingForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private profileService: ProfileService
  ) {
    this.editBillingForm = formBuilder.group({
      'companyName': ['', [Validators.required]],
      'companyRegistrationCountryId': ['', [Validators.required]],
      'companyVatNumber': ['', [Validators.required]],
      'addressLine1': ['', [Validators.required]],
      'addressLine2': [''],
      'addressCountryId': ['', [Validators.required]],
      'addressCity': ['', [Validators.required]],
      'addressState': ['', [Validators.required]],
      'addressZipCode': ['', [Validators.required]],
    });
  }

  ngOnInit() {
    const {
      billingCompanyName,
      billingCompanyRegistrationCountry,
      billingCompanyVatNumber,
      billingAddressCity,
      billingAddressCountry,
      billingAddressLine1,
      billingAddressLine2,
      billingAddressState,
      billingAddressZipCode
    } = this.profileService.profileData;
    const billingCompanyRegistrationCountryId = billingCompanyRegistrationCountry ? billingCompanyRegistrationCountry.id : null;
    const billingAddressCountryId = billingAddressCountry ? billingAddressCountry.id : null;
    this.editBillingForm.setValue({
      companyName: billingCompanyName,
      companyRegistrationCountryId: billingCompanyRegistrationCountryId,
      companyVatNumber: billingCompanyVatNumber,
      addressLine1: billingAddressLine1,
      addressLine2: billingAddressLine2,
      addressCountryId: billingAddressCountryId,
      addressCity: billingAddressCity,
      addressState: billingAddressState,
      addressZipCode: billingAddressZipCode
    });
  }

  onSubmit() {
    const data = {...this.editBillingForm.value};
    console.log(data);
    this.profileService.updateBillingInfo(data).subscribe( res => {
    }, error => {
      console.log(error);
    });
  }

  onCancel() {
    this.collapseSection.emit();
  }
}
