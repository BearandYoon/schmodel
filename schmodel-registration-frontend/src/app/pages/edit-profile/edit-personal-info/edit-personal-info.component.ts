import { Component, OnInit } from '@angular/core';
import * as dropdownData from './dropdown-data';

@Component({
  selector: 'edit-personal-info',
  templateUrl: './edit-personal-info.component.html',
  styleUrls: ['./edit-personal-info.component.scss']
})
export class EditPersonalInfoComponent implements OnInit {

  dropdownData: any = {};

  constructor() {
    this.dropdownData = dropdownData;
  }

  ngOnInit() {
  }

}
