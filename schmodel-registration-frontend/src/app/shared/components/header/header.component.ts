import { Component, OnInit, Input } from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() pageData: any = {};

  constructor(private location: Location, private router: Router) { }

  ngOnInit() {
  }

  handleLeftNavClick() {
    const navLeft: String = this.pageData.navLeft;
    this.router.events.filter(event => event instanceof NavigationEnd)
      .subscribe(ev => {
        const previousUrl: any = ev;
        if(previousUrl.url.indexOf('resetPwd') !== -1) {
          this.router.navigate(['/']);
        }
      });
    switch (navLeft) {
      case 'back':
        this.location.back();
        break;
      default:
    }
  }

  handleRightNavClick() {
    const navRight: String = this.pageData.navRight;
    switch (navRight) {
      case 'settings':
        this.router.navigate(['/edit-my-profile']);
        break;
      default:
    }
  }
}
