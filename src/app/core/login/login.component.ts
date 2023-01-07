import { Component, OnInit } from '@angular/core';
import { TocService } from '../toc.service';

@Component({
  selector: 'lms-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private tocService: TocService
  ) { }

  ngOnInit(): void {
  }

  login(){
    this.tocService.LoggedIn.next(true);
  }

}
