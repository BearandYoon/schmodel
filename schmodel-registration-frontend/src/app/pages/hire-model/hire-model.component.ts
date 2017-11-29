import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hire-model',
  templateUrl: './hire-model.component.html',
  styleUrls: ['./hire-model.component.scss']
})
export class HireModelComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let pageTitleDom = document.getElementById('page-title');
    pageTitleDom.style.fontSize = '14px';
    pageTitleDom.innerHTML = '<strong>R3</strong> | Jan. 13, 2018 | <strong>MARRAKESH</strong>, MA';
  }

}
