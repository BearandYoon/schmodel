import { Component, Input, forwardRef, ViewEncapsulation } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CountryCode } from './country-code';
import { Country } from './country.model';

@Component({
  selector: 'phone-code-select',
  templateUrl: './phone-code-select.component.html',
  styleUrls: ['./phone-code-select.component.scss'],
  providers: [
    CountryCode,
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PhoneCodeSelectComponent),
      multi: true
    }
  ],
  encapsulation: ViewEncapsulation.None
})
export class PhoneCodeSelectComponent implements ControlValueAccessor {

  @Input('value') _value = '';
  @Input() preferredCountries: Array<string> = [];
  onChange: any = () => { };
  onTouched: any = () => { };

  allCountries: Array<Country> = [];
  preferredCountriesInDropDown: Array<Country> = [];
  selectedCountry: Country = new Country();

  constructor(
      private countryCodeData: CountryCode
  ) {
    this.fetchCountryData();
  }

  ngOnInit() {
    if (this.preferredCountries.length) {
      this.preferredCountries.forEach(iso2 => {
        let preferredCountry = this.allCountries.filter((c) => {
          return c.iso2 === iso2;
        });
        this.preferredCountriesInDropDown.push(preferredCountry[0]);
      });
    }
    if (this.preferredCountriesInDropDown.length) {
      this.selectedCountry = this.preferredCountriesInDropDown[0];
    } else {
      this.selectedCountry = this.allCountries[0];
    }
  }

  get value() {
    return this._value;
  }

  set value(val) {
    this._value = val;
    for (let country of this.allCountries) {
      if (val == country.dialCode) {
        this.selectedCountry = country;
        break;
      }
    }
    this.onChange(val);
    this.onTouched();
  }

  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

  writeValue(value) {
    if (value) {
      this.value = value;
    }
  }

  public onCountrySelect(country: Country, el): void {
    this.selectedCountry = country;
    this.value = this.selectedCountry.dialCode;
  }

  protected fetchCountryData(): void {
    this.countryCodeData.allCountries.forEach(c => {
      let country = new Country();
      country.name = c[0].toString();
      country.iso2 = c[1].toString();
      country.dialCode = c[2].toString();
      country.priority = +c[3] || 0;
      country.areaCode = +c[4] || null;
      country.flagClass = country.iso2.toLocaleLowerCase();
      country.placeHolder = '';
      this.allCountries.push(country);
    });
  }

}
