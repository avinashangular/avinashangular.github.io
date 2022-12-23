import { Component, OnInit } from '@angular/core';
import { MasterPlayer } from '../master-player';

@Component({
  selector: 'lms-mcq-player',
  templateUrl: './mcq-player.component.html',
  styleUrls: ['./mcq-player.component.css']
})
export class McqPlayerComponent extends MasterPlayer implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
