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
  btnSave: boolean;
  message: string = '';
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
    this.btnSave = false;
  }

  onSubmit() {
    this.message = '';
    const data = {...this.editBillingForm.value};
    data.billingAddressLine2 = null;
    console.log(data);
    this.profileService.updateBillingInfo(data).subscribe( res => {
      this.btnSave = true;
      this.profileService.getProfileInfo();
    }, error => {
      this.message = ValidationMessage.GENERIC_ERROR_MESSAGE;
    });
  }

  onCancel() {
    this.initializeBillInfo();
    this.btnSave = false;
    this.collapseSection.emit();
  }
}
