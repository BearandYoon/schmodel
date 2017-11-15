import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sch-input-row',
  templateUrl: './sch-input-row.component.html',
  styleUrls: ['./sch-input-row.component.scss']
})
export class SchInputRowComponent implements OnInit {

  @Input() type: string = 'text';
  @Input() name: string = '';
  @Input() label: string = '';

  constructor() { }

  ngOnInit() {
  }

}
