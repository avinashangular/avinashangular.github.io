import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TocService {

  private hostName:string = 'http://localhost:';
  private port:number = 5050;

  constructor(
    private http: HttpClient
  ) { }

  getClassAndSubject(id:number) {;
    return this.http.post(`${this.hostName}${this.port}/Curriculum/GetClassAndSubjectByUserId`, {
      "ID": id
    });
  }

  getBookChapterAndTopic(classId:number, subjectId:number) {
    return this.http.post(`${this.hostName}${this.port}/Curriculum/GetTOCByClassSubject`, {
      "ClassID": classId,
      "SubjectID": subjectId
    });
  }

  getContentByTopic(topicId:number) {
    return this.http.post(`${this.hostName}${this.port}/Contents/GetContentsByTopicID`, {
      "ID": topicId
    });
  }
}
