import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import * as dropdownData from './dropdown-data';

import { ProfileService } from '../../../core/services';

@Component({
  selector: 'sch-dropdown',
  templateUrl: './sch-dropdown.component.html',
  styleUrls: ['./sch-dropdown.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SchDropdownComponent),
      multi: true
    }
  ]
})
export class SchDropdownComponent implements OnInit, ControlValueAccessor {

  @Input() category: string = '';
  @Input() excludedValues: any = [];
  @Input('value') _value = '';
  onChange: any = () => { };
  onTouched: any = () => { };
  private data: any = {};
  private options: any = [];

  get value() {
    return this._value;
  }

  set value(val) {
    this._value = val;
    this.onChange(val);
    this.onTouched();
  }

  constructor(
    private profileService: ProfileService
  ) { }

  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

  writeValue(value) {
    this.value = value;
  }

  ngOnInit() {
    const placeholder = '';
    const options = [];
    if (this.category === 'countries') {
      const data = this.profileService.profileData.allCountries;
      if (data) {
        for (const item of data) {
          options.push({
            value: item.id,
            text: item.name
          });
        }
      }
    } else if (this.category === 'citizenships') {
      const data = this.profileService.profileData.allCitizenships;
      if (data) {
        for (const item of data) {
          options.push({
            value: item.id,
            text: item.name
          });
        }
      }
    } else if (this.category === 'languages') {
      const data = this.profileService.profileData.allLanguages;
      if (data) {
        for (const item of data) {
          options.push({
            value: item.id,
            text: item.name
          });
        }
      }
    } else if (this.category === 'eyeColors') {
      const data = this.profileService.profileData.allEyeColors;
      if (data) {
        for (const item of data) {
          options.push({
            value: item.id,
            text: item.name
          });
        }
      }
    } else if (this.category === 'hairColors') {
      const data = this.profileService.profileData.allHairColors;
      if (data) {
        for (const item of data) {
          options.push({
            value: item.id,
            text: item.name
          });
        }
      }
    } else if (this.category === 'dressSizes') {
      const data = this.profileService.profileData.allDressSizes;
      if (data) {
        for (const item of data) {
          options.push({
            value: item.id,
            text: `UK ${item.ukValue} / EU ${item.euValue} / US ${item.usValue}`
          });
        }
      }
    } else if (this.category === 'heights') {
      const data = this.profileService.profileData.allBodyHeights;
      if (data) {
        for (const item of data) {
          options.push({
            value: item.id,
            text: `${Math.floor(item.valueInch / 12)}'${item.valueInch % 12}" / ${item.valueCm}cm`
          });
        }
      }
    } else if (this.category === 'waistSizes') {
      const data = this.profileService.profileData.allBodyWaists;
      if (data) {
        for (const item of data) {
          options.push({
            value: item.id,
            text: `${item.valueDeciInch / 10}" / ${item.valueCm}cm`
          });
        }
      }
    } else if (this.category === 'weights') {
      const data = this.profileService.profileData.allBodyWeights;
      if (data) {
        for (const item of data) {
          options.push({
            value: item.id,
            text: `${item.valueLb}lbs / ${item.valueHg / 10}kg`
          });
        }
      }
    } else if (this.category === 'chestCircSizes') {
      const data = this.profileService.profileData.allBodyChestCircumferences;
      if (data) {
        for (const item of data) {
          options.push({
            value: item.id,
            text: `UK ${item.ukValue} / EU ${item.euValue} / US ${item.usValue}`
          });
        }
      }
    } else if (this.category === 'chestCupSizes') {
      const data = this.profileService.profileData.allBodyChestCupSizes;
      if (data) {
        for (const item of data) {
          options.push({
            value: item.id,
            text: `UK ${item.ukValue} / EU ${item.euValue} / US ${item.usValue}`
          });
        }
      }
    } else {
      this.data = dropdownData[this.category];
      this.options = this.data.options;
      return;
    }

    this.options = options;
    this.data = {
      placeholder,
      options
    };
  }

  ngOnChanges(changes) {
    if (changes['excludedValues'] && this.excludedValues && this.data.options) {
      this.options = this.data.options.filter(option => this.excludedValues.indexOf('' + option.value) < 0);
    }
  }

}
