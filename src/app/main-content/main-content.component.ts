import { Component, OnInit } from '@angular/core';
import { Video, VideosJson } from 'src/DataJson';
//import data.json from src folder
import videos from '../../data.json';
//import getYoutubeResults
declare var require:any;
//improt getYoutubeResults function
const YoutubeResults = require('../get-youtube-requests/getYoutubeResults');

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit { 
  videos: VideosJson = videos;
  videoRows: Video[][] = [];
  keyword: string ='Cows';
  resultsPerPage:number= 10;

 
  dataItems = YoutubeResults.getResults(this.keyword,this.resultsPerPage);

  ngAfterContentInit() {
    this.videoRows = this.videos.videos.reduce<Video[][]>((result, video, index) => {
      if (index % 4 === 0) {
        result.push([video]);
      } else {
        result[result.length - 1].push(video);
      }
      return result;
    }, []);}

  constructor() { }

  ngOnInit(): void {
  }


}
