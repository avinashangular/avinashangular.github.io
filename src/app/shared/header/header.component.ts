import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lms-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input("Heading") heading:string | undefined;
  
  constructor() { }

  ngOnInit(): void {
  }

}
