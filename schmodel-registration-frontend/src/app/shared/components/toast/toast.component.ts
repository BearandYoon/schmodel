import { Component, AfterViewInit, Input, Output, ViewChild, ElementRef, EventEmitter, ViewEncapsulation } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class ToastComponent implements AfterViewInit {
  @ViewChild('toastWrapper') toastWrapper: ElementRef;

  @Input() animatable = false;
  @Input() toastType = 'error';
  @Input() toastTitle = '';
  @Input() toastMessage = '';
  @Output() closeToast: EventEmitter<any> = new EventEmitter();

  constructor(private sanitizer: DomSanitizer) { }

  ngAfterViewInit() {
    const toastElement = this.toastWrapper.nativeElement;
    const windowHeight = window.innerHeight;
    const toastRect = toastElement.getBoundingClientRect();
    if (toastRect.y === undefined) {
      toastRect.y = toastRect.top;
    }
    if (toastRect.y + toastRect.height > windowHeight) {
      toastElement.scrollIntoView({behavior: 'smooth', block: 'end'});
    } else if (toastRect.y < 0) {
      toastElement.scrollIntoView({behavior: 'smooth', block: 'start'});
    }
  }

  onCloseToast() {
    this.closeToast.emit();
  }

}
