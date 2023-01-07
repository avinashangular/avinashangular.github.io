import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MasterPlayer } from '../master-player';

@Component({
  selector: 'lms-html-player',
  templateUrl: './html-player.component.html',
  styleUrls: ['./html-player.component.css']
})
export class HtmlPlayerComponent extends MasterPlayer  implements OnInit {

  safeUrl:SafeResourceUrl | undefined;

  constructor(
    private sanitizer: DomSanitizer,
  ) { 
    super();
  }

  ngOnInit(): void {
    this.getSafeUrl();
  }

   getSafeUrl(url?:any) {
   // console.log('htmlpath1' + this.htmlpath);
    this.safeUrl =  this.sanitizer.bypassSecurityTrustResourceUrl('https://childtuition.org/')
  }

}
