import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lms-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  @Input('PlayerConfig') playerConfig:IPlayerConfig | undefined;

  videoUrl = 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'

  constructor() { }

  ngOnInit(): void {
  }

}


export interface IPlayerConfig {
  playerType: "VIDEO" | "MCQ" | "PDF" | "HTML",
  options:any;
}
