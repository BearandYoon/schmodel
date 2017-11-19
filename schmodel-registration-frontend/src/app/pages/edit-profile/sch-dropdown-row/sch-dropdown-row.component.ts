import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'sch-dropdown-row',
  templateUrl: './sch-dropdown-row.component.html',
  styleUrls: ['./sch-dropdown-row.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SchDropdownRowComponent),
      multi: true
    }
  ]
})
export class SchDropdownRowComponent implements ControlValueAccessor {

  @Input() items: any = [];
  @Input() allowAddCategory: string = null;
  @Input() label: string = '';
  @Input() description: string = null;
  @Input('value') _value = '';
  onChange: any = () => { };
  onTouched: any = () => { };
  values: any = [];

  get value() {
    return this._value;
  }

  set value(val) {
    this._value = val;
    this.values = val ? val.split('|') : [];
    this.onChange(val);
    this.onTouched();
  }

  constructor() { }

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

  onValueChange(value, index) {
    while (this.values.length <= index) {
      this.values.push('');
    }
    this.values[index] = value;
    this.value = this.values.join('|');
  }

}
