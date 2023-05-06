import { Component, ViewEncapsulation } from '@angular/core';
import SwiperCore, { Autoplay, Pagination } from 'swiper';

SwiperCore.use([Pagination, Autoplay]);

@Component({
  selector: 'app-home-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HeroComponent {
  autoplayConfig = {
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
    delay: 8000,
  };
}
