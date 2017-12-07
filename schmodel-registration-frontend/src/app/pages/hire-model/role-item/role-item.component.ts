import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'role-item',
  templateUrl: './role-item.component.html',
  styleUrls: ['./role-item.component.scss']
})
export class RoleItemComponent implements OnInit {

  @Input() role: any = {};

  constructor() { }

  ngOnInit() {
  }

  pad(d) {
    return (d < 10) ? '0' + d.toString() : d.toString();
  }
}
