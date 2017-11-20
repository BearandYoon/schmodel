import { Component, OnInit, ViewChild, Renderer, ElementRef } from '@angular/core';

@Component({
  selector: 'edit-talent-photos',
  templateUrl: './edit-talent-photos.component.html',
  styleUrls: ['./edit-talent-photos.component.scss']
})


export class EditTalentPhotosComponent implements OnInit {
  @ViewChild('fileInput') fileInput:ElementRef;

  public photo_section_infor: Array<any> = [];
  public no_tmp: number;
  public height: number;
  public width: number;
  constructor(private renderer:Renderer) { }

  ngOnInit() {
    this.no_tmp = 0;
    this.photo_section_infor.push(
      {text:"Headshot Photo",    url:"", flag: false, backImg:"/assets/images/ic_photo_head.svg", backSize: '80% auto', backPos: '50% 100%'},
      {text:"Full Length Photo", url:"", flag: false, backImg:"/assets/images/ic_photo_fullbody.svg", backSize: '35% auto', backPos: '50% 50%'},
      {text:"Profile Photo",     url:"", flag: false, backImg:"/assets/images/ic_photo_profile.svg", backSize: '65% auto', backPos: '50% 100%'},
      {text:"Additional Photo",  url:"", flag: false, backImg:"", backSize: "", backPos: ""},
      {text:"Additional Photo",  url:"", flag: false, backImg:"", backSize: "", backPos: ""},
      {text:"Additional Photo",  url:"", flag: false, backImg:"", backSize: "", backPos: ""},
    );
  }

  onClose(index: number) {
    console.log(index);
    this.photo_section_infor[index].flag = false;
    this.photo_section_infor[index].url = "";
  }
  trackByFn(index: any, item: any) {
    return index;
  }

  onUploadFile(num: number) {
    let event = new MouseEvent('click', {bubbles: true});
    this.no_tmp = num;

    this.renderer.invokeElementMethod(
      this.fileInput.nativeElement, 'dispatchEvent', [event]);
  }

  valuechange(event: any) {
    if(event.target.files && event.target.files[0]) {
      let reader = new FileReader();

      reader.onload = (event:any) => {
        this.photo_section_infor[this.no_tmp].url = event.target.result;
        this.photo_section_infor[this.no_tmp].flag = true;
      }

      reader.readAsDataURL(event.target.files[0]);
    }
  }
}
