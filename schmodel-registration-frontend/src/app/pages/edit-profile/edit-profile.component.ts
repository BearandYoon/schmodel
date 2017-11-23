import { Component, OnInit, ViewEncapsulation, TemplateRef } from '@angular/core';

import { ProfileService } from '../../core/services';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EditProfileComponent implements OnInit {
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
    private profileService: ProfileService
  ) {
    const photoWidth = Math.round(window.innerWidth / 3);
    const photoHeight = Math.round(window.innerWidth / 3);
    this.profileService.profileData = null;
    this.profileService.getProfileInfo(photoWidth, photoHeight);
  }

  ngOnInit() {
  }

  onCollapseSection(sectionTemplate: TemplateRef<any>): void {
    sectionTemplate['isOpen'] = false;
  }
}
