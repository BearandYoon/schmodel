import { Component, OnInit, ViewChild, Renderer, ElementRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal';

import { ProfileService } from '../../../core/services';
import { MessageModalComponent } from '../../../shared/modules/messageModal/messageModal.component';

@Component({
  selector: 'edit-talent-photos',
  templateUrl: './edit-talent-photos.component.html',
  styleUrls: ['./edit-talent-photos.component.scss']
})


export class EditTalentPhotosComponent implements OnInit {
  @ViewChild('fileInput') fileInput:ElementRef;

  public photo_section_infor: Array<any> = [];
  public response: Array<any> = [];
  public no_tmp: number;
  public myFile: number;
  private data: any;

  messageModalRef: BsModalRef;
  messageContent: string;
  messageModalConfig = {
    animated: true,
    keyboard: true,
    backdrop: true,
    ignoreBackdropClick: false
  };

  constructor(private renderer:Renderer,
              private profileService: ProfileService,
              private dlgService: BsModalService) {
  }

  ngOnInit() {
    this.photo_section_infor.push(
      {text:"Headshot Photo",    photoUrl:"", photoId: 0, photoTypeId: 1, photoWidth:0, photoHeight:0,
                            flag: false, backImg:"/assets/images/ic_photo_head.svg", backSize: '80% auto', backPos: '50% 100%'},
      {text:"Full Length Photo", photoUrl:"", photoId: 0, photoTypeId: 2, photoWidth:0, photoHeight:0,
                            flag: false, backImg:"/assets/images/ic_photo_fullbody.svg", backSize: '35% auto', backPos: '50% 50%'},
      {text:"Profile Photo",     photoUrl:"", photoId: 0, photoTypeId: 3, photoWidth:0, photoHeight:0,
                            flag: false, backImg:"/assets/images/ic_photo_profile.svg", backSize: '65% auto', backPos: '50% 100%'},
      {text:"Additional Photo",  photoUrl:"", photoId: 0, photoTypeId: 4, photoWidth:0, photoHeight:0,
                            flag: false, backImg:"", backSize: "", backPos: ""},
      {text:"Additional Photo",  photoUrl:"", photoId: 0, photoTypeId: 4, photoWidth:0, photoHeight:0,
                            flag: false, backImg:"", backSize: "", backPos: ""},
      {text:"Additional Photo",  uphotoUrl:"", photoId: 0, photoTypeId: 4, photoWidth:0, photoHeight:0,
                            flag: false, backImg:"", backSize: "", backPos: ""},
    );

    let i_add = 3;
    for(let i = 0; i < this.profileService.profileData.photos.length; i++) {
      this.data = this.profileService.profileData.photos[i];
      if (this.data.photoTypeId < 4) {
        this.photo_section_infor[this.data.photoTypeId - 1].photoId = this.data.id;
        this.photo_section_infor[this.data.photoTypeId - 1].photoUrl = this.data.url;
        this.photo_section_infor[this.data.photoTypeId - 1].flag = true;
      } else if (this.data.photoTypeId == 4) {
        this.photo_section_infor[i_add].photoId = this.data.id;
        this.photo_section_infor[i_add].photoUrl = this.data.url;
        this.photo_section_infor[i_add].flag = true;
        i_add ++;
      } 
    }
    console.log(this.photo_section_infor);
    this.messageContent = "We can only accept photos smaller than 5MB. Please select another photo and try again.";
    this.no_tmp = -1;    
    this.data = {file: "", photoTypeId: 0, photoWidth: 0, photoHeight: 0};
  }

  onClose(num: number) {
    this.photo_section_infor[num].flag = false;
    this.photo_section_infor[num].photoUrl = "";
    this.profileService.deletePhoto(this.photo_section_infor[num].photoId).subscribe( res => {
      console.log(res);
    }, error => {
      console.log(error);
    });
  }

  trackByFn(index: any, item: any) {
    return index;
  }

  onUploadFile(num: number) {
    let event = new MouseEvent('click', {bubbles: true});
    this.no_tmp = num;
    this.myFile = null;

    this.renderer.invokeElementMethod(
      this.fileInput.nativeElement, 'dispatchEvent', [event]);
  }

  valuechange(event: any) {
    this.myFile = event.nativeElement;
    if(event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      this.data.file = event.target.files[0];

      reader.onload = (event:any) => {
        let imgWidth, imgHeight, image = new Image();
        image.src = event.target.result;
        image.onload = function () {
          if(this.data.file.size >= 5*1024*1024) {
            this.messageModalRef = this.dlgService.show(MessageModalComponent, this.messageModalConfig);
            this.messageModalRef.content.messageContent = this.messageContent;
            this.messageModalRef.content.isBtnCancel = false;        
            this.messageModalRef.content.onCloseReason.subscribe(result => {});
          } else {
            this.photo_section_infor[this.no_tmp].flag = true;
            this.data.photoWidth = image.width;
            this.data.photoHeight = image.height;
            this.data.photoTypeId = this.photo_section_infor[this.no_tmp].photoTypeId;

            this.profileService.uploadPhoto(
              this.data.file, 
              this.data.photoTypeId, 
              this.data.photoWidth, 
              this.data.photoHeight).subscribe( res => {
                console.log(res);
                this.photo_section_infor[this.no_tmp].photoUrl = res.photoUrl;
                this.photo_section_infor[this.no_tmp].photoId = res.photoId;
                this.photo_section_infor[this.no_tmp].photo = res.photoUrl;
            }, error => {
              console.log(error);
            });
          }
        }.bind(this);
      }
      reader.readAsDataURL(event.target.files[0]);
    }
  }
}