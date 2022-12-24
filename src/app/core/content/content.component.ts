import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { lmsSessionManager } from 'src/app/lmSession/sesstionManager';
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
    private router: Router,
    private lmsSesstion: lmsSessionManager
  ) { }

  async ngOnInit(): Promise<void> {
    const topicId = await this.tocService.getTopicId();
    this.tocService.getContentByTopic(topicId).subscribe((data:any)=>{
      if (data) {
        this.constentList = data;
      }
    });
  }

  viewContent(contentId:number) {
    this.tocService.setContentId(1, true);
    this.router.navigateByUrl('/view-content');
  }

}
