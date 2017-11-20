import { Component, OnInit, ViewChild, Renderer, ElementRef } from '@angular/core';

@Component({
  selector: 'edit-talent-photos',
  templateUrl: './edit-talent-photos.component.html',
  styleUrls: ['./edit-talent-photos.component.scss']
})


export class EditTalentPhotosComponent implements OnInit {
  @ViewChild('fileInput') fileInput:ElementRef;

  public photo_section_infor: Array<any> = [];
  public url: string = "";

  constructor(private renderer:Renderer) { }

  ngOnInit() {
    this.url = "/assets/images/bg_cell_gradient.png";
    this.photo_section_infor.push(
      {text:"Headshot Photo",    flag: false, backImg:"/assets/images/ic_photo_head.svg", backSize: '80% auto', backPos: '50% 100%'},
      {text:"Full Length Photo", flag: false, backImg:"/assets/images/ic_photo_fullbody.svg", backSize: '35% auto', backPos: '50% 50%'},
      {text:"Profile Photo",     flag: false, backImg:"/assets/images/ic_photo_profile.svg", backSize: '65% auto', backPos: '50% 100%'},
      {text:"Additional Photo",  flag: false, backImg:"", backSize: "", backPos: ""},
      {text:"Additional Photo",  flag: false, backImg:"", backSize: "", backPos: ""},
      {text:"Additional Photo",  flag: false, backImg:"", backSize: "", backPos: ""},
    );
  }

  onUploadFile() {
    let event = new MouseEvent('click', {bubbles: true});
    this.renderer.invokeElementMethod(
      this.fileInput.nativeElement, 'dispatchEvent', [event]);
  }

  valuechange(event: any) {
    if(event.target.files && event.target.files[0]) {
      let reader = new FileReader();

      reader.onload = (event:any) => {
        this.url = event.target.result;
      }

      reader.readAsDataURL(event.target.files[0]);
    }
  }
}
