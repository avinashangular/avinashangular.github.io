import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TocService } from '../toc.service';

@Component({
  selector: 'lms-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constentList:any[]=[];

  constructor(
    private tocService: TocService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.tocService.getContentByTopic(1).subscribe((data:any)=>{
      if (data) {
        console.log(data);
        this.constentList = data;
      }
    });
  }

  viewContent(contentId:number) {
    console.log('-----', contentId);
    this.tocService.selectedContentIdSubject.next(contentId);
    this.router.navigateByUrl('/view-content');
  }

}
