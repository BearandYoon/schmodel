import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
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
        this.router.navigate(['/edit-profile']);
        break;
      default:
    }
  }
}
