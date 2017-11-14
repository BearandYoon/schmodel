import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sch-input',
  templateUrl: './sch-input.component.html',
  styleUrls: ['./sch-input.component.scss']
})
export class SchInputComponent implements OnInit {

  @Input() type: string = 'text';
  @Input() name: string = '';
  @Input() label: string = '';

  constructor() { }

  ngOnInit() {
  }

}
