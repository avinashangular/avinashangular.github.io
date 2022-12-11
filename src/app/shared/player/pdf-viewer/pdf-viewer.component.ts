import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lms-pdf-viewer',
  templateUrl: './pdf-viewer.component.html',
  styleUrls: ['./pdf-viewer.component.css']
})
export class PdfViewerComponent implements OnInit {

  @Input() pdfpath: string = 'assets/sample.pdf';
  @Input() zoom: number = 0;
  numofpages:number = 1;

  constructor() { }

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
    //   //console.log(data);
      
    // })
    // , (error)=> { const errormsg = this._error.logError(error); };
    //console.log('exit');
  }

}
