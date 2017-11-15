import { Component, OnInit, Input } from '@angular/core';
import * as dropdownData from './dropdown-data';

@Component({
  selector: 'sch-dropdown',
  templateUrl: './sch-dropdown.component.html',
  styleUrls: ['./sch-dropdown.component.scss']
})
export class SchDropdownComponent implements OnInit {

  @Input() category: string = '';
  dropdownData: any = {};

  constructor() {
    this.dropdownData = dropdownData;
  }

  ngOnInit() {
  }

}
