import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MCQService {

  private hostName:string = environment.hostName;
  private port:number = environment.port;

  constructor(
    private http: HttpClient
  ) { 
   
  }

  getTestById(testId:number) {
    return this.http.post(`${this.hostName}${this.port}/MCQ/GetTestByTestId`, {
      "TestId": testId
    });
  }

  getTestByIdWithAnswer(testId:number) {
    return this.http.post(`${this.hostName}${this.port}/MCQ/GetTestByTestId`, {
      "TestId": testId,
      "ShowAnswer":"Y"
    });
  }

 
}
