import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MasterPlayer } from '../master-player';

@Component({
  selector: 'lms-mcq-player',
  templateUrl: './mcq-player.component.html',
  styleUrls: ['./mcq-player.component.css']
})
export class McqPlayerComponent extends MasterPlayer implements OnInit {

  constructor(
    private router: Router
  ) {
    super();
  }

  ngOnInit(): void {
  }

  navigateToQuestion() {
    this.router.navigateByUrl('/mcq');
  }

}
