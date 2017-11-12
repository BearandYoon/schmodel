import { Component, OnInit, ViewEncapsulation } from '@angular/core';

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
  ]

  constructor() { }

  ngOnInit() {
  }

}
