import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ValidationService } from '../../services';

@Component({
  selector: 'app-control-message',
  templateUrl: './control-message.component.html',
  styleUrls: ['./control-message.component.scss']
})
export class ControlMessageComponent implements OnInit {
  @Input() control: FormControl;
  constructor() { }

  get errorMessage() {
    for (const propertyName in this.control.errors) {
      if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
        return ValidationService.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
      }
    }
    return null;
  }

  ngOnInit() {
  }

}
