import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'sch-input-row',
  templateUrl: './sch-input-row.component.html',
  styleUrls: ['./sch-input-row.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SchInputRowComponent),
      multi: true
    }
  ]
})
export class SchInputRowComponent implements ControlValueAccessor {

  @Input() type: string = 'text';
  @Input() maxlength: number = 0;
  @Input() label: string = '';
  @Input('value') _value = '';
  onChange: any = () => { };
  onTouched: any = () => { };

  get value() {
    return this._value;
  }

  set value(val) {
    this._value = val;
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
    this.value = value;
  }
}
