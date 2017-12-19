import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CountryCode } from '../../../shared/components/phone-code-select/country-code';
import * as _ from 'google-libphonenumber';

import { ProfileService } from '../../../core/services';
import { ValidationMessage } from '../../../shared/models';

@Component({
  selector: 'edit-personal-info',
  templateUrl: './edit-personal-info.component.html',
  styleUrls: ['./edit-personal-info.component.scss'],
  providers: [
    CountryCode
  ]
})
export class EditPersonalInfoComponent implements OnInit {
  @Output() collapseSection: EventEmitter<any> = new EventEmitter();

  editPersonalForm: FormGroup;
  socialInvalid: boolean = false;
  status: any = null;
  
  constructor(
    private formBuilder: FormBuilder,
    private profileService: ProfileService,
    private countryCodeData: CountryCode
  ) {
    this.editPersonalForm = formBuilder.group({
      'firstName': ['', [Validators.required]],
      'lastName': ['', [Validators.required]],
      'dateOfBirth': ['', [Validators.required]],
      'residentialAddressCountryId': ['', [Validators.required]],
      'residentialAddressCity': ['', [Validators.required]],
      'residentialAddressState': ['', []],
      'residentialAddressLine1': ['', [Validators.required]],
      'residentialAddressLine2': ['', []],
      'residentialAddressZipCode': ['', [Validators.required]],
      'phoneCountryCode': ['', [Validators.required]],
      'phoneNumber': ['', [Validators.required]],
      'citizenshipIds': ['', [Validators.required]],
      'languageIds': ['', [Validators.required]],
      'bodyHeightId': ['', [Validators.required]],
      'bodyChestCircumferenceId': ['', [Validators.required]],
      'bodyChestCupSizeId': ['', [Validators.required]],
      'bodyWaistId': ['', [Validators.required]],
      'bodyWeightId': ['', [Validators.required]],
      'dressSizeId': ['', [Validators.required]],
      'hairColorId': ['', [Validators.required]],
      'eyeColorId': ['', [Validators.required]],
      'twitterUsername': ['', []],
      'instagramUsername': ['', []],
      'facebookUsername': ['', []],
      'linkedinUsername': ['', []],
      'biography': ['', [Validators.required]]
    }, {validator: this.validateSocialAccounts});
  }

  ngOnInit() {
    this.initializePersonalForm();
  }

  getPhoneNumberPlaceHolder(countryCode: string): string {
    for (const country of this.countryCodeData.allCountries) {
      if (country[2].toString() === countryCode) {
        countryCode = country[1].toString();
      }
    }

    const defaultNumber = '1234567890';
    const phoneUtil = _.PhoneNumberUtil.getInstance();
    const pnf = _.PhoneNumberFormat;
    try {
      const phoneNumber = phoneUtil.parse(defaultNumber, countryCode);
      return phoneUtil.format(phoneNumber);
    } catch (e) {
      return defaultNumber;
    }
  }

  toDateFormatString() {
    const parts = this.editPersonalForm.value.dateOfBirth.split('|');
    return `${parts[2]}-${parts[1]}-${parts[0]}`;
  }

  toDateFormatValue(dateStr) {
    if (!dateStr) return null;
    const parts = dateStr.split('-');
    return `${parts[2]}|${parts[1]}|${parts[0]}`;
  }

  initializePersonalForm() {
    this.status = null;
    const {
      firstName,
      lastName,
      dateOfBirth,
      residentialAddressCountry,
      residentialAddressCity,
      residentialAddressState,
      residentialAddressLine1,
      residentialAddressLine2,
      residentialAddressZipCode,
      phoneCountryCode,
      phoneNumber,
      citizenships,
      languages,
      bodyHeight,
      bodyChestCircumference,
      bodyChestCupSize,
      bodyWaist,
      bodyWeight,
      dressSize,
      hairColor,
      eyeColor,
      twitterUsername,
      instagramUsername,
      facebookUsername,
      linkedinUsername,
      biography
    } = this.profileService.profileData;
    const dateOfBirthValue = this.toDateFormatValue(dateOfBirth);
    const citizenshipIds = citizenships.map(e => e.id).join('|');
    const languageIds = languages.map(e => e.id).join('|');
    const residentialAddressCountryId = residentialAddressCountry ? residentialAddressCountry.id : null;
    const bodyHeightId = bodyHeight ? bodyHeight.id : null;
    const bodyChestCircumferenceId = bodyChestCircumference ? bodyChestCircumference.id : null;
    const bodyChestCupSizeId = bodyChestCupSize ? bodyChestCupSize.id : null;
    const bodyWaistId = bodyWaist ? bodyWaist.id : null;
    const bodyWeightId = bodyWeight ? bodyWeight.id : null;
    const dressSizeId = dressSize ? dressSize.id : null;
    const hairColorId = hairColor ? hairColor.id : null;
    const eyeColorId = eyeColor ? eyeColor.id : null;

    this.editPersonalForm.setValue({
      firstName,
      lastName,
      dateOfBirth: dateOfBirthValue,
      residentialAddressCountryId,
      residentialAddressCity,
      residentialAddressState,
      residentialAddressLine1,
      residentialAddressLine2,
      residentialAddressZipCode,
      phoneCountryCode: phoneCountryCode || '1',
      phoneNumber,
      citizenshipIds,
      languageIds,
      bodyHeightId,
      bodyChestCircumferenceId,
      bodyChestCupSizeId,
      bodyWaistId,
      bodyWeightId,
      dressSizeId,
      hairColorId,
      eyeColorId,
      twitterUsername,
      instagramUsername,
      facebookUsername,
      linkedinUsername,
      biography
    });
  }

  validateSocialAccounts = (f: FormGroup) => {
    const data = f.value;
    let filledCount = 0;
    if (data.twitterUsername && data.twitterUsername.length) {
      filledCount ++;
    }
    if (data.facebookUsername && data.facebookUsername.length) {
      filledCount ++;
    }
    if (data.instagramUsername && data.instagramUsername.length) {
      filledCount ++;
    }
    if (data.linkedinUsername && data.linkedinUsername.length) {
      filledCount ++;
    }

    if (filledCount < 2) {
      const touched = f.controls &&
                      (f.controls.twitterUsername.touched
                      || f.controls.facebookUsername.touched
                      || f.controls.instagramUsername.touched
                      || f.controls.linkedinUsername.touched);
      if (touched) {
        this.socialInvalid = true;
      }

      return { socialInvalid: true };
    } else {
      this.socialInvalid = false;
    }

    return null;
  }

  onChange(event: any) {
    this.status = null;
  }

  onSubmit() {
    this.status = null;
    const data = {...this.editPersonalForm.value};
    data.dateOfBirth = this.toDateFormatString();
    data.citizenshipIds = data.citizenshipIds.split('|');
    data.languageIds = data.languageIds.split('|');
    this.profileService.updatePersonalInfo(data).subscribe( res => {
      this.profileService.getProfileInfo();
      this.status = {
        success: true,
        message: 'Successfully Saved!'
      };
    }, error => {
      this.status = {
        success: false,
        message: ValidationMessage.GENERIC_ERROR_MESSAGE
      };
    });
  }

  onCancel() {
    this.initializePersonalForm();
    this.status = null;
    this.collapseSection.emit();
  }
}
