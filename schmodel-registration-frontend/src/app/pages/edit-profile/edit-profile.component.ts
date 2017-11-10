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
      title: 'PASSWORD',
      isOpen: false
    },
    {
      title: 'PHOTOS',
      isOpen: false
    },
    {
      title: 'PERSONAL INFORMATION',
      isOpen: false
    },
    {
      title: 'MY TERMS & CONDITIONS',
      isOpen: false
    },
    {
      title: 'BILLING INFORMATION',
      isOpen: false
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
