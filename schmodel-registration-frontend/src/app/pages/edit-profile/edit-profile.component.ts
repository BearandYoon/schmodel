import { Component, OnInit, ViewEncapsulation, TemplateRef } from '@angular/core';

import { ProfileService } from '../../core/services';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EditProfileComponent implements OnInit {

  hasError: boolean = false;
  panels: any[] = [
    {
      component: 'edit-profile-password',
      title: 'PASSWORD'
    },
    {
      component: 'edit-talent-photos',
      title: 'PHOTOS'
    },
    {
      component: 'edit-personal-info',
      title: 'PERSONAL INFORMATION'
    },
    {
      component: 'edit-terms',
      title: 'MY TERMS & CONDITIONS'
    },
    {
      component: 'edit-billing-info',
      title: 'BILLING INFORMATION'
    }
  ];

  constructor(
    public profileService: ProfileService
  ) {
    this.profileService.profileData = null;
    this.profileService.getProfileInfo(success => {
      this.hasError = !success;
    });
  }

  ngOnInit() {
  }

  onCollapseSection(sectionTemplate: TemplateRef<any>): void {
    sectionTemplate['isOpen'] = false;
  }
}
