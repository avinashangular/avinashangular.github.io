import { Component, OnInit } from '@angular/core';
import { IPlayerConfig } from 'src/app/shared/player/player/player.component';
import { TocService } from '../toc.service';

@Component({
  selector: 'lms-view-content',
  templateUrl: './view-content.component.html',
  styleUrls: ['./view-content.component.css']
})
export class ViewContentComponent implements OnInit {

  constentList:any[]=[];
  playerConfig:IPlayerConfig | undefined;

  constructor(
    private tocService: TocService
  ) { }

  ngOnInit(): void {
    this.tocService.selectedContentIdSubject.subscribe((contetId:number)=>{
      if(contetId) {
        console.log(contetId, this.tocService.contents);
        this.constentList = this.tocService.contents;
        const content = this.constentList.filter(content => {
          return content.contentid == contetId ? content : null;
        })?.[0];

        this.playerConfig = {
          options : content,
          playerType: this.getPlayerType(content.mimeType)
        }

        console.log('++++++', content);
      }
    });
    // this.tocService.getContentByTopic(1).subscribe((data:any)=>{
    //   if (data) {
    //     console.log(data);
    //     this.constentList = data;
    //   }
    // });
  }

  changeQuestion(stepName:'pre'|'next') {

  }

  getPlayerType(mimeType:string) : "VIDEO" | "PDF" | "MCQ" {
    switch(mimeType) {
      case "video/mp4" : 
        return 'VIDEO';
        break;
      default :
       return 'VIDEO';
        break;
    }
  }

}
