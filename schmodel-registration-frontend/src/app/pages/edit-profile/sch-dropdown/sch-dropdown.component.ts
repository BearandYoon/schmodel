import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import * as dropdownData from './dropdown-data';

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
export class SchDropdownComponent implements ControlValueAccessor {

  @Input() category: string = '';
  @Input('value') _value = '';
  onChange: any = () => { };
  onTouched: any = () => { };
  private dropdownData: any = {};

  get value() {
    return this._value;
  }

  set value(val) {
    this._value = val;
    this.onChange(val);
    this.onTouched();
  }

  constructor() {
    this.dropdownData = dropdownData;
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

  ngOnInit() {
  }

}
