import { Component, Input, AfterViewChecked, ViewChild, ElementRef, forwardRef, ViewEncapsulation } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'textarea-autosize',
  templateUrl: './textarea-autosize.component.html',
  styleUrls: ['./textarea-autosize.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextareaAutosizeComponent),
      multi: true
    }
  ]
})
export class TextareaAutosizeComponent implements ControlValueAccessor, AfterViewChecked {

  @Input() maxlength: number = 0;
  @Input('value') _value = '';
  @ViewChild('textarea') textAreaElement: ElementRef;
  @ViewChild('hiddenElement') hiddenElement: ElementRef;

  onChange: any = () => { };
  onTouched: any = () => { };

  ngAfterViewChecked() {
    this.resize();
  }

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

  resize() {
    const el = this.textAreaElement.nativeElement;
    const elHidden = this.hiddenElement.nativeElement;
    elHidden.value = el.value;
    el.style.cssText = 'height: ' + elHidden.scrollHeight + 'px';
  }
}
