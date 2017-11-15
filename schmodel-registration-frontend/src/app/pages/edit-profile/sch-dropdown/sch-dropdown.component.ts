import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sch-dropdown',
  templateUrl: './sch-dropdown.component.html',
  styleUrls: ['./sch-dropdown.component.scss']
})
export class SchDropdownComponent implements OnInit {

  @Input() data: any = {};

  constructor() { }

  ngOnInit() {
  }

}
