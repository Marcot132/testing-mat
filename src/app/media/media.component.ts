import { Component, OnInit } from '@angular/core';
import { MediaService } from '../services/media.service';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent implements OnInit {
  constructor(private mediaService: MediaService) {
  }

  proxy: number[] = [];

  devHours: number[] = [];

  mediaProxy: number = 0;
  mediaHours: number = 0;

  ngOnInit(): void {

    this.mediaService.getMedia()
    .subscribe( (data: any) => {
      this.proxy = data.data
      this.getMediaProxy();
    })

    this.mediaService.getHours()
    .subscribe( (data: any) => {
      this.devHours = data.data
      this.getMediaHours();
    })
  }

  getMediaProxy() {
    var media = 0;

    for (let index = 0; index < this.proxy.length; index++) {
      media += this.proxy[index];
    }

    this.mediaProxy = media / this.proxy.length;

    console.log('media component:', this.mediaProxy);
  }

  getMediaHours() {
    var media = 0;

    console.log('media component:', this.devHours);

    for (let index = 0; index < this.devHours.length; index++) {
      media += this.devHours[index];
    }

    this.mediaHours = media / this.devHours.length;

    console.log('media component:', this.mediaHours);
  }
  
}