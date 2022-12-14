import { Component, Input, OnInit } from '@angular/core';
import { MasterPlayer } from '../master-player';

@Component({
  selector: 'lms-pdf-viewer',
  templateUrl: './pdf-viewer.component.html',
  styleUrls: ['./pdf-viewer.component.css']
})
export class PdfViewerComponent  extends MasterPlayer  implements OnInit {

  @Input() pdfpath: string = 'https://ncert.nic.in/textbook/pdf/jesc102.pdf';
  @Input() zoom: number = 0;
  numofpages:number = 1;

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

  
  callBackFn(pdf: any)
  {
    this.numofpages = pdf.numPages;
  }

  pageRendered(e: CustomEvent) {
    //if(this.numofpages == e["pageNumber"])
    //{
    //  this._ngxspinner.hide();
    //}
  }

  onError(error: any) {
   // this._ngxspinner.hide();
  }

  onProgress(progressData: any) {
   // this._ngxspinner.show();
  }
  
  ngOnDestroy()
  {
    // this._ngxspinner.hide();
    // this._service.updateContentUsageLog(this.logId)
    // .subscribe(data => {
      
    // })
    // , (error)=> { const errormsg = this._error.logError(error); };
  }

}
