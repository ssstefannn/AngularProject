import { Component, Input, OnInit } from '@angular/core';
import {Video} from '../../DataJson';
@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
  @Input() video:Video = Object();
  
  constructor() {
   }

  ngOnInit(): void {
  }

}
