import { Component, OnInit, HostListener } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { HttpHelperService } from '../../core/http-helper.service';
import { ValidationMessage } from '../../shared/models';
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
       this.httpHelperService.offlineMode = false;
       this.httpHelperService.offlineError=false;
  }

  @HostListener('window:onffline', ['$event'])
    onBrowserOffline(ev) {
      this.httpHelperService.offlineMode = true;
      this.httpHelperService.offlineError= true;
      this.httpHelperService.serverError = false;
  }

  pageData: any = {};

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
    this.httpHelperService.offlineError = false;
  }

  showErrorToast() {
    return this.httpHelperService.serverError && !this.httpHelperService.offlineMode;
  }

  showOfflineToast() {
    return this.httpHelperService.offlineError;
  }

  getOfflineModeMessage() {
    return ValidationMessage.ERR_INTERNET_DISCONNECTED;
  }

  getServerErrorMessage() {
    return ValidationMessage.BACKEND_CONNECTION_ERROR;
  }

}
