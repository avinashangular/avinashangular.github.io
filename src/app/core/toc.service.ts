import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map, BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class TocService {

  private hostName:string = environment.hostName;
  private port:number = environment.port;

  public contents:any;
  public selectedContentIdSubject = new BehaviorSubject<number>(0);

  constructor(
    private http: HttpClient
  ) { 
   
  }

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
    }).pipe(
      map((resp:any)=> {
        this.contents = resp;
        return this.contents;
      })
    );
  }
}
