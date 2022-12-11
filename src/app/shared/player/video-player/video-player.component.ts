import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'lms-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit {

  @Input('VideoURL') videourl:string | undefined;
  @ViewChild('vdPlayer') vidPlayer:ElementRef | undefined;

  constructor() { }

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
    //   //console.log(data);
      
    // })
    // , (error)=> { const errormsg = this._error.logError(error); };
    //console.log('exit');
  }

  loadvideoandplay()
  {
    if(this.vidPlayer) {
      this.vidPlayer.nativeElement.currentTime =0;
      this.vidPlayer.nativeElement.load();
    }
  }

}
