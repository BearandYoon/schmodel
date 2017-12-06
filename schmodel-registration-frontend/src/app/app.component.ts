import { Component, HostListener } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpHelperService } from './core/http-helper.service';

@Injectable()

@Component({
  host: {
    '(document:touchmove)': 'onTouchMove($event)'
  },
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  // @HostListener('document:touchmove', ['$event'])
  // onTouchMove(ev: KeyboardEvent) {
  //   ev.preventDefault();
  // }

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
  }
}