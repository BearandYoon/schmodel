import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

import { ProfileService } from '../../../core/services';

@Component({
  selector: 'edit-personal-info',
  templateUrl: './edit-personal-info.component.html',
  styleUrls: ['./edit-personal-info.component.scss']
})
export class EditPersonalInfoComponent implements OnInit {

  editPersonalForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private profileService: ProfileService
  ) {
    this.editPersonalForm = formBuilder.group({
      'firstName': ['', [Validators.required]],
      'lastName': ['', [Validators.required]],
      'dateOfBirth': ['', [Validators.required]],
      'residentialAddressCountryId': ['', [Validators.required]],
      'residentialAddressCity': ['', [Validators.required]],
      'residentialAddressState': ['', [Validators.required]],
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
      'twitterUsername': ['', [Validators.required]],
      'instagramUsername': ['', [Validators.required]],
      'facebookUsername': ['', [Validators.required]],
      'linkedinUsername': ['', [Validators.required]],
      'biography': ['', [Validators.required]]
    });
  }

  ngOnInit() {
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
      hairColor = null,
      eyeColor,
      twitterUsername,
      instagramUsername,
      facebookUsername,
      linkedinUsername,
      biography
    } = this.profileService.profileData;
    const citizenshipIds = citizenships.map(e => e.id).join('|');
    const languageIds = languages.map(e => e.id).join('|');
    this.editPersonalForm.setValue({
      firstName,
      lastName,
      dateOfBirth,
      residentialAddressCountryId: residentialAddressCountry,
      residentialAddressCity,
      residentialAddressState,
      residentialAddressLine1,
      residentialAddressLine2,
      residentialAddressZipCode,
      phoneCountryCode,
      phoneNumber,
      citizenshipIds,
      languageIds,
      bodyHeightId: bodyHeight,
      bodyChestCircumferenceId: bodyChestCircumference,
      bodyChestCupSizeId: bodyChestCupSize,
      bodyWaistId: bodyWaist,
      bodyWeightId: bodyWeight,
      dressSizeId: dressSize,
      hairColorId: hairColor,
      eyeColorId: eyeColor,
      twitterUsername,
      instagramUsername,
      facebookUsername,
      linkedinUsername,
      biography
    });
  }

  getDateOfBirth() {
    const parts = this.editPersonalForm.value.dateOfBirth.split('|');
    return `${parts[2]}-${parts[0]}-${parts[1]}`;
  }

  onSubmit() {
    const data = {...this.editPersonalForm.value};
    data.dateOfBirth = this.getDateOfBirth();
    data.citizenshipIds = data.citizenshipIds.split('|');
    data.languageIds = data.languageIds.split('|');
    console.log(data);
    this.profileService.updatePersonalInfo(data).subscribe( res => {
    }, error => {
      console.log(error);
    });
  }

}
