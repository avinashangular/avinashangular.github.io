import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { MasterPlayer } from '../master-player';

@Component({
  selector: 'lms-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent extends MasterPlayer implements OnInit {


  @ViewChild('vdPlayer') vidPlayer:ElementRef | undefined;
  videourl:string|undefined = 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4';
   
  constructor() {
    super();
   }

  ngOnInit(): void {
  }

  loadeddata(e: any)
  {
    
  }
  
  onprogress(e: any)
  {
    //this._ngxspinner.hide();
    //this._ngxspinner.show();
  }

  onError(error: any) {
    //this._ngxspinner.hide();
  }
  
  closeVideo()
  {
   // this._router.navigate(['robotics/student-robotics/chapter-toc']);
  }

  ngOnDestroy()
  {
   // this._ngxspinner.hide();
    // this._service.updateContentUsageLog(this.logId)
    // .subscribe(data => {
      
    // })
    // , (error)=> { const errormsg = this._error.logError(error); };
  }

  loadvideoandplay()
  {
    if(this.vidPlayer) {
      this.vidPlayer.nativeElement.currentTime =0;
      this.vidPlayer.nativeElement.load();
    }
  }

}
