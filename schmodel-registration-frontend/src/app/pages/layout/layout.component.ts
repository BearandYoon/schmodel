import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  pageData: any = {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        let route = activatedRoute;
        while (route.firstChild) {
          route = route.firstChild;
        }

        this.pageData = route.snapshot.data;
      }
    })
  }

  ngOnInit() {
  }

}
