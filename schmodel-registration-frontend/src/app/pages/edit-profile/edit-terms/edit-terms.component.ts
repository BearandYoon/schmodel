import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'edit-terms',
  templateUrl: './edit-terms.component.html',
  styleUrls: ['./edit-terms.component.scss']
})
export class EditTermsComponent implements OnInit {

  public tc_content: Array<any> = [];
  constructor() { }

  ngOnInit() {
    this.tc_content.push(
      {id: 1, content:'I require qunioa and avocado twice a day.'},
      {id: 2, content:'I require gluten free food options during my lunch break.'},
      {id: 3, content:'All photos taken of me need my consent before public use.'},
    );
  }

  trackByFn(index: any, item: any) {
    return index;
  }

  onClose(i:number) {
    this.tc_content = this.tc_content.filter(item => item.content != this.tc_content[i].content);
  }

  onAddTC() {
    this.tc_content.push({id: this.tc_content.length+1, content: ""});
  }

  valuechange(i:number, newValue) {
    this.tc_content[i].content = newValue;
  }
}
