import { Component, OnInit, HostListener } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { HttpHelperService } from '../../core/http-helper.service';

@Component({
  host: {
    '(window:offline)': 'onBrowserOffline($event)',
    '(window:online)': 'onBrowserOnline($event)'
  },
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

 @HostListener('window:online', ['$event'])
    onBrowserOnline(ev) {
       this.offlineMode = false;
  }

  @HostListener('window:onffline', ['$event'])
    onBrowserOffline(ev) {
      this.offlineMode = true;
  }

  pageData: any = {};
  offlineMode: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public httpHelperService: HttpHelperService,
  ) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        let route = activatedRoute;
        while (route.firstChild) {
          route = route.firstChild;
        }

        this.pageData = route.snapshot.data;
      }
    });
  }

  ngOnInit() {
  }

  onCloseErrorMessage() {
    this.httpHelperService.serverError = false;
  }

  onCloseOfflineMessage() {
    this.offlineMode = false;
  }

}
