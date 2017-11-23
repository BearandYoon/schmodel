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
  excludedValues: any = [];

  get value() {
    return this._value;
  }

  set value(val) {
    if (typeof val === 'number') {
      val = '' + val;
    } else if (typeof val !== 'string') {
      val = '';
    }
    this._value = val;
    this.values = val.split('|');
    this.onChange(val);
    this.onTouched();

    if (this.allowAddCategory) {
      if (this.values.length > this.items.length) {
        const newArray = this.items.slice();
        while (this.values.length > newArray.length) {
          newArray.push(this.allowAddCategory);
        }
        this.items = newArray;
      }
    }
  }

  constructor() { }

  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

  writeValue(value) {
    this.value = value;
    if (this.allowAddCategory) {
      this.items = [];
      this.values.map(x => this.items.push(this.allowAddCategory));
    }
  }

  adjustLists() {
    if (!this.allowAddCategory) {
      return;
    }

    const excludedValues = [];
    for (let i = 0; i < this.items.length; i ++) {
      const newValues = this.values.slice();
      if (i < newValues.length) {
        newValues.splice(i, 1);
      }
      excludedValues.push(newValues);
    }

    this.excludedValues = excludedValues;
  }

  onValueChange(value, index) {
    while (this.values.length <= index) {
      this.values.push('');
    }
    this.values[index] = value;
    this.value = this.values.join('|');

    this.adjustLists();
  }

  onClickAdd() {
    if (this.values.length && this.values[this.values.length - 1] === '') {
      return;
    }
    const newArray = this.items.slice();
    newArray.push(this.allowAddCategory);
    this.items = newArray;
    this.adjustLists();
  }
}
