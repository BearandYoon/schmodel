import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ProfileService } from '../../../core/services';
import { ValidationMessage } from '../../../shared/models';

@Component({
  selector: 'edit-billing-info',
  templateUrl: './edit-billing-info.component.html',
  styleUrls: ['./edit-billing-info.component.scss']
})
export class EditBillingInfoComponent implements OnInit {

  @Output() collapseSection: EventEmitter<any> = new EventEmitter();
  editBillingForm: FormGroup;
  status: any = null;
  untouched = true;

  constructor(
    private formBuilder: FormBuilder,
    private profileService: ProfileService
  ) {
    this.editBillingForm = formBuilder.group({
      'companyName': ['', []],
      'companyRegistrationCountryId': ['', []],
      'companyVatNumber': ['', []],
      'addressLine1': ['', [Validators.required]],
      'addressLine2': ['', []],
      'addressCountryId': ['', [Validators.required]],
      'addressCity': ['', [Validators.required]],
      'addressState': ['', []],
      'addressZipCode': ['', [Validators.required]],
    });
  }

  ngOnInit() {
    this.initializeBillInfo();
  }

  initializeBillInfo() {
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

  onChange(event: any) {
    console.log('test');
    this.status = null;
    this.untouched = false;
  }

  onSubmit() {
    this.status = null;
    const data = {...this.editBillingForm.value};
    this.profileService.updateBillingInfo(data).subscribe( res => {
      this.status = {
        success: true,
        message: ValidationMessage.BILLING_INFO_SAVE_SUCCESS
      };
      this.profileService.getProfileInfo();
    }, error => {
      this.status = {
        success: false,
        message: ValidationMessage.PERSONAL_INFO_SAVE_ERROR
      };
    });
  }

  onCancel() {
    this.initializeBillInfo();
    this.status = null;
    this.collapseSection.emit();
  }
}
