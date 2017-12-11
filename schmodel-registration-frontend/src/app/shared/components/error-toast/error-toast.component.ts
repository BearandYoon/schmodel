import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-error-toast',
  templateUrl: './error-toast.component.html',
  styleUrls: ['./error-toast.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ErrorToastComponent implements OnInit {

  @Input() toastMessage: string = '';
  @Output() closeToast: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onCloseToast() {
    this.closeToast.emit();
  }

}
