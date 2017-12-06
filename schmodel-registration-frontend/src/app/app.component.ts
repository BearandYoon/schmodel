import { Component, HostListener } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpHelperService } from './core/http-helper.service';

@Injectable()

@Component({
  host: {
    '(document:gestureend)': 'onGestureEnd($event)',
    '(document:gesturechange)': 'onGestureChange($event)',
    '(document:touchstart)': 'onTouchStart($event)',
    '(document:dblclick)': 'onDoubleClick($event)'
  },
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  @HostListener('document:gestureend', ['$event'])
  onGestureEnd(ev) {
    ev.preventDefault();
  }

  @HostListener('document:gesturechange', ['$event'])
  onGestureChnage(ev) {
    ev.preventDefault();
  }

  @HostListener('document:touchstart', ['$event'])
  onTouchStart(ev) {
    if(ev.touches.length > 1){
      ev.preventDefault();
    }
  }

  @HostListener('document:dblclick', ['$event'])
  onDoubleClick(ev) {
    ev.preventDefault();
  }

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
  }
}