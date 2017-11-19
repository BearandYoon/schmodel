import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sch-dropdown-row',
  templateUrl: './sch-dropdown-row.component.html',
  styleUrls: ['./sch-dropdown-row.component.scss']
})
export class SchDropdownRowComponent implements OnInit {

  @Input() items: any = [];
  @Input() allowAddCategory: string = null;
  @Input() label: string = '';
  @Input() description: string = null;

  constructor() { }

  ngOnInit() {
  }

}
