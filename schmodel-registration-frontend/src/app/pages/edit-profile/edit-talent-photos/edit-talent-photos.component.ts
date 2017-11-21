import { Component, OnInit, ViewChild, Renderer, ElementRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { ProfileService } from '../../../core/services';

@Component({
  selector: 'edit-talent-photos',
  templateUrl: './edit-talent-photos.component.html',
  styleUrls: ['./edit-talent-photos.component.scss']
})


export class EditTalentPhotosComponent implements OnInit {
  @ViewChild('fileInput') fileInput:ElementRef;
  public photoUploadForm: FormGroup;

  public photo_section_infor: Array<any> = [];
  public response: Array<any> = [];
  public no_tmp: number;
  public height: number;
  public width: number;
  private data: any;

  constructor(private renderer:Renderer, 
              private profileService: ProfileService) { }

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
    this.data = {file: "", photoTypeId: 0, photoWidth: 100, photoHeight: 100};
  }

  onClose(num: number) {
    this.photo_section_infor[num].flag = false;
    this.photo_section_infor[num].url = "";
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
      this.data.file = event.target.files[0];

      reader.onload = (event:any) => {
        let imgWidth, imgHeight, image = new Image();
        image.src = event.target.result;
        image.onload = function () {
          this.photo_section_infor[this.no_tmp].flag = true;
          this.data.photoWidth = image.width;
          this.data.photoHeight = image.height;
          if(this.photo_section_infor[this.no_tmp].text === "Headshot Photo")    this.data.photoTypeId = 1;
          if(this.photo_section_infor[this.no_tmp].text === "Full Length Photo") this.data.photoTypeId = 2;
          if(this.photo_section_infor[this.no_tmp].text === "Profile Photo")     this.data.photoTypeId = 3;
          if(this.photo_section_infor[this.no_tmp].text === "Additional Photo")  this.data.photoTypeId = 4;
  
          this.profileService.uploadPhoto(this.data.file, this.data.photoTypeId, this.data.photoWidth, this.data.photoHeight).subscribe( res => {
            console.log(res);
            this.photo_section_infor[this.no_tmp].url = res.photoUrl;
          }, error => {
            console.log(error);
          });
        }.bind(this);
      }
      reader.readAsDataURL(event.target.files[0]);
    }
  }
}
