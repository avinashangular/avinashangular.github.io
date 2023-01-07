import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map, BehaviorSubject, Observable } from 'rxjs'
import { lmsSessionManager } from '../lmSession/sesstionManager';
import { LMSSessionName } from '../lmsConstraint/lmsConstraint';

@Injectable({
  providedIn: 'root'
})
export class TocService {

  private hostName:string = environment.hostName;
  private port:number = environment.port;

  private tocClassSubject:any;
  private bookChapterTopic:any;

  private contents:any;
  private contentId = 0;
  private topicId = 0;
  private classId = 0;
  private subjectId = 0;
  private bookId = 0;

  LoggedIn:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(
    private http: HttpClient,
    private lmsSession: lmsSessionManager
  ) { }

  getBookId(fromSession:boolean = false): number {
    if (this.bookId && !fromSession) {
      return this.contentId;
    } else if (this.lmsSession.getSesstion(LMSSessionName.BOOK_ID)) {
      return this.lmsSession.getSesstion(LMSSessionName.BOOK_ID);
    } else {
      return 0;
    }   
  }

  setBookId(bookId:number, toSession:boolean) {
    if(bookId) {
      this.bookId = bookId;
      if (toSession) {
        this.lmsSession.setSession(LMSSessionName.BOOK_ID, bookId);
      }
    }
  }

  getContentId(fromSession:boolean = false): number {
    if (this.contentId && !fromSession) {
      return this.contentId;
    } else if (this.lmsSession.getSesstion(LMSSessionName.CONTENT_ID)) {
      return this.lmsSession.getSesstion(LMSSessionName.CONTENT_ID);
    } else {
      return 0;
    }   
  }

  setContentId(contentId:number, toSession:boolean) {
    if(contentId) {
      this.contentId = contentId;
      if (toSession) {
        this.lmsSession.setSession(LMSSessionName.CONTENT_ID, contentId);
      }
    }
  }

  getTopicId(fromSession:boolean = false): number {
    if (this.topicId && !fromSession) {
      return this.topicId;
    } else if (this.lmsSession.getSesstion(LMSSessionName.TOPIC_ID)) {
      return this.lmsSession.getSesstion(LMSSessionName.TOPIC_ID);
    } else {
      return 0;
    }
  }

  setTopicId(topicId:number, toSession:boolean = false) {
    if(topicId) {
      this.topicId = topicId;
      if (toSession) {
        this.lmsSession.setSession(LMSSessionName.TOPIC_ID, topicId);
      }      
    }
  }

  getClassId(fromSession:boolean = false): number {
    if (this.classId && !fromSession) {
      return this.classId;
    } else if (this.lmsSession.getSesstion(LMSSessionName.CLASS_ID)) {
      return this.lmsSession.getSesstion(LMSSessionName.CLASS_ID);
    } else {
      return 0;
    }
  }

  setClassId(classId:number, toSession:boolean = false) {
    if(classId) {
      this.classId = classId;
      if (toSession) {
        this.lmsSession.setSession(LMSSessionName.CLASS_ID, classId);
      }      
    }
  }

  getSubjectId(fromSession:boolean = false): number {
    if (this.subjectId && !fromSession) {
      return this.subjectId;
    } else if (this.lmsSession.getSesstion(LMSSessionName.SUBJECT_ID)) {
      return this.lmsSession.getSesstion(LMSSessionName.SUBJECT_ID);
    } else {
      return 0;
    }
  }
  
  setSubjectId(subjectId:number, toSession:boolean = false) {
    if(subjectId) {
      this.subjectId = subjectId;
      if (toSession) {
        this.lmsSession.setSession(LMSSessionName.SUBJECT_ID, subjectId);
      }      
    }
  }

  getClassAndSubject(id:number) {
    if (this.tocClassSubject) {
      return new Observable(observer => {
        observer.next(this.tocClassSubject);
        observer.complete();
      });
    } else if(this.lmsSession.getSesstion(LMSSessionName.TOC_CLASS_SUBJECT)) {
      return new Observable(observer => {
        observer.next(this.lmsSession.getSesstion(LMSSessionName.TOC_CLASS_SUBJECT));
        observer.complete();
      });
    } else {
      return this._getClassAndSubject(id);
    }   
  }

  private _getClassAndSubject(id:number) {
    return this.http.post(`${this.hostName}${this.port}/Curriculum/GetClassAndSubjectByUserId`, {
      "ID": id
    }).pipe(
      map((resp:any)=> {
        this.tocClassSubject = resp;
        this.lmsSession.setSession(LMSSessionName.TOC_CLASS_SUBJECT, resp);
        return this.tocClassSubject;
      })
    );
  }

  getBookChapterAndTopic(classId:number, subjectId:number) {
    if (this.getClassId(true) == classId && this.getSubjectId(true) == subjectId) {
      if (this.bookChapterTopic) {
        return new Observable(observer => {
          observer.next(this.bookChapterTopic);
          observer.complete();
        });
      } else if(this.lmsSession.getSesstion(LMSSessionName.TOC_BOOK_CHAPTER_TOPIC)) {
        return new Observable(observer => {
          observer.next(this.lmsSession.getSesstion(LMSSessionName.TOC_BOOK_CHAPTER_TOPIC));
          observer.complete();
        });
      } else {
        return this._getBookChapterAndTopic(classId, subjectId);
      }
    } else {
      return this._getBookChapterAndTopic(classId, subjectId);
    }
  }

  private _getBookChapterAndTopic(classId:number, subjectId:number) {
    return this.http.post(`${this.hostName}${this.port}/Curriculum/GetTOCByClassSubject`, {
      "ClassID": classId,
      "SubjectID": subjectId
    }).pipe(
      map((resp:any)=> {
        this.bookChapterTopic = resp;
        this.setClassId(classId, true);
        this.setSubjectId(subjectId, true);
        this.lmsSession.setSession(LMSSessionName.TOC_BOOK_CHAPTER_TOPIC, resp);
        return this.bookChapterTopic;
      })
    );
  }

  getContentByTopic(topicId:number) {
    if (this.getTopicId(true) != topicId) {
      return this._getContentByTopic(topicId);
    } else {
    if(this.contents) {
      return new Observable(observer => {
        observer.next(this.contents);
        observer.complete();
      });
    } else if(this.lmsSession.getSesstion(LMSSessionName.CONTENT)) {
      return new Observable(observer => {
        observer.next(this.lmsSession.getSesstion(LMSSessionName.CONTENT));
        observer.complete();
      });
    } else {
      return this._getContentByTopic(topicId);
    }
  }
  }

  private _getContentByTopic(topicId:number) {
    return this.http.post(`${this.hostName}${this.port}/Contents/GetContentsByTopicID`, {
      "ID": topicId
    }).pipe(
      map((resp:any)=> {
        this.contents = resp;
        this.setTopicId(topicId, true);
        this.lmsSession.setSession(LMSSessionName.CONTENT, resp);
        return this.contents;
      })
    );
  }
}
