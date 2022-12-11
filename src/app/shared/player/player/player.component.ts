import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lms-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  videoUrl = 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'

  constructor() { }

  ngOnInit(): void {
  }

}
