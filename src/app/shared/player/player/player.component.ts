import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { LMSPlayerType } from 'src/app/lmsConstraint/lmsConstraint';

@Component({
  selector: 'lms-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit, OnChanges {

  @Input('PlayerConfig') playerConfig:IPlayerConfig | undefined;

  constructor() { }

  ngOnInit(): void {
    
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

}


export interface IPlayerConfig {
  playerType: LMSPlayerType,
  options:any;
}
