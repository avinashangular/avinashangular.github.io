import { Component, OnInit } from '@angular/core';
import { TocService } from '../toc.service';

@Component({
  selector: 'lms-view-content',
  templateUrl: './view-content.component.html',
  styleUrls: ['./view-content.component.css']
})
export class ViewContentComponent implements OnInit {

  constentList:any[]=[];

  constructor(
    private tocService: TocService
  ) { }

  ngOnInit(): void {
    this.tocService.getContentByTopic(1).subscribe((data:any)=>{
      if (data) {
        console.log(data);
        this.constentList = data;
      }
    });
  }

  changeQuestion(stepName:'pre'|'next') {

  }

}
