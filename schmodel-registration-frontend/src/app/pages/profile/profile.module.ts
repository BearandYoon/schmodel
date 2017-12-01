import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'angular4-carousel';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { SwiperModule } from 'angular2-useful-swiper';
import { ProfileService } from '../../core/services';


@NgModule({
  imports: [
    CommonModule,
    ProfileRoutingModule,
    CarouselModule,
    SwiperModule,
  ],
  declarations: [ProfileComponent],
  providers: [ProfileService]
})
export class ProfileModule { }
