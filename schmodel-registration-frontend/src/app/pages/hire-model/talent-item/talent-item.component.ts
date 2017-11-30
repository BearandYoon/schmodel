import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'talent-item',
  templateUrl: './talent-item.component.html',
  styleUrls: ['./talent-item.component.scss']
})
export class TalentItemComponent implements OnInit {

  @Input() talent: any = {};
  @Output() confirmHiring: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onConfirmHiring() {
    this.confirmHiring.emit();
  }

}
