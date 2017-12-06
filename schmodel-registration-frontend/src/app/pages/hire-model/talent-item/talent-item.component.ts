import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'talent-item',
  templateUrl: './talent-item.component.html',
  styleUrls: ['./talent-item.component.scss']
})
export class TalentItemComponent implements OnInit {

  @Input() talent: any = {};
  @Output() confirmHiring: EventEmitter<any> = new EventEmitter();
  @Output() handleLikeTalent: EventEmitter<any> = new EventEmitter();
  @Output() handleUnlikeTalent: EventEmitter<any> = new EventEmitter();

  constructor(
    public router: Router,
  ) { }

  ngOnInit() {}

  onClickActionItem(index) {
    if (this.talent.hired) {
      return;
    }

    const role = this.talent.roles[index];
    if (role.application) {
      if (!role.application.liked) {
        this.handleLikeTalent.emit({ talent: this.talent, role: role });
      } else {
        this.handleUnlikeTalent.emit({ talent: this.talent, role: role });
      }
    }
  }

  onCloseErrorMessage() {
    this.talent.errorMessage = '';
  }

  onConfirmHiring() {
    this.confirmHiring.emit({ talent: this.talent });
  }

  onProfile() {
    this.router.navigate(['client/talent-profile'], { queryParams: { talentId: this.talent.id }});
  }
}
