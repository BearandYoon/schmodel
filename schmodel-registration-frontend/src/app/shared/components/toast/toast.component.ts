import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ToastComponent implements OnInit {

  @Input() animatable: boolean = false;
  @Input() toastType: string = 'error';
  @Input() toastTitle: string = '';
  @Input() toastMessage: string = '';
  @Output() closeToast: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onCloseToast() {
    this.closeToast.emit();
  }

}
