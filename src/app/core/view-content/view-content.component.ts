import { Component, OnInit } from '@angular/core';
import { LMSPlayerType } from 'src/app/lmsConstraint/lmsConstraint';
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
  currentIndex = 0;

  constructor(
    private tocService: TocService
  ) { }

  async ngOnInit(): Promise<void> {    
    
    const topicId = await this.tocService.getTopicId();
    if(topicId) {       
      this.tocService.getContentByTopic(topicId).subscribe((contents:any) => {
        this.constentList = contents;
      });
      const contentId = await this.tocService.getContentId();
      const content = this.constentList.filter(content => content.contentid == contentId ? content : null)?.[0];
      this.playerConfig = this.getPlayerConfig(content);
    }
  }

  getPlayerConfig(content:any) {
    return {
      options : content,
      playerType: this.getPlayerType(content.mimetype)
    }
  }

  changeQuestion(stepName:'pre'|'next') {
    this.currentIndex = this.constentList.findIndex((value, index) =>  value.contentid == this.playerConfig?.options.contentid)
    if (stepName == 'next') {
      if (this.currentIndex < this.constentList.length - 1) {
        this.currentIndex++;        
      }
    } else if (stepName == 'pre') {
      if (this.currentIndex > 0) {
        this.currentIndex--;        
      }
    }
    this.playerConfig = this.getPlayerConfig(this.constentList[this.currentIndex]);
  }

  getPlayerType(mimeType:string) : LMSPlayerType{
    switch(mimeType) {
      case 'video/mp4' : 
        return LMSPlayerType.VIDEO;
        break;
      case 'application/pdf' :
        return LMSPlayerType.PDF;
        break;
      default :
       return LMSPlayerType.PDF;
        break;
    }
  }

}
