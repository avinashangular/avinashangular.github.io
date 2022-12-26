import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LMSSessionName } from 'src/app/lmsConstraint/lmsConstraint';
import { lmsSessionManager } from 'src/app/lmSession/sesstionManager';
import { TocService } from '../toc.service';

@Component({
  selector: 'lms-table-of-content',
  templateUrl: './table-of-content.component.html',
  styleUrls: ['./table-of-content.component.css']
})
export class TableOfContentComponent implements OnInit {

  selectedClass:any;
  filteredClass:any[] = [];
  classList = [];

  selectedSubject:any;
  filteredSubject:any[]=[];
  subjectListMaster:any[]=[];
  subjectList:any[]=[];

  selectedBook:any;
  filteredBooks:any[]=[];
  bookList:any[]=[];
  
  seletedChapter:any;
  filteredChapter:any[]=[];
  chapterList:any[]=[];

  seletedTopic:any;
  filteredTopic:any[]=[];
  topicList:any[]=[];

  isDropdown:boolean = true;
  

  constructor(
    private tocService: TocService,
    private lmsSession: lmsSessionManager,
    private router: Router
  ) { }

 async ngOnInit(): Promise<void> {
  debugger;
    this.tocService.getClassAndSubject(1).subscribe((data:any)=>{
      this.classList = data['ClassCollection'];
      this.subjectListMaster = data['Subject'];
    });

    const classId = this.tocService.getClassId(true);
    if (classId && this.classList.length) {
     this.selectedClass = this.classList.filter((val:any) => {
        if (val.classid == classId) {
          this.onClassSelect(val.classid)
          return true;
        }
        return false;
      })[0];
    }

    const subjectId = this.tocService.getSubjectId(true);
    if (subjectId && this.subjectList.length) {
      this.selectedSubject = this.subjectList.filter((val:any) => {
        if (val.SubjectID == subjectId) {
          this.onSubjectSelect(val.SubjectID)
          return true;
        }
        return false;
      })[0];
    }

    const bookId = this.tocService.getBookId(true);
    if(bookId && this.bookList.length) {
      this.selectedBook = this.bookList.filter((val:any) => {
        if (val.bookid == bookId) {
          this.onBookSelect(val.bookid);
          return true;
        }
        return false;
      })[0]
    }
  }

  onClassSelect(classid:number) {

     // reset subject and Book
     if (this.tocService.getClassId(true) != classid) {
      this.selectedSubject = null;
      this.selectedBook = null;
      this.topicList = [];
      this.filteredChapter = [];
      this.filteredBooks = [];
      this.subjectList = [];
    }

   this.subjectList = this.subjectListMaster.filter((subject:any)=> {
      if(subject.ClassID == classid) {
        return true;
      }
      return false;
    });   
  }

  onSubjectSelect(SubjectID:number) {
    if(this.tocService.getSubjectId(true) != SubjectID) {
      this.selectedBook = null;
      this.topicList = [];
      this.chapterList = [];
      this.filteredChapter = [];
      this.bookList = [];
      this.filteredBooks = [];
    }

    this.tocService.getBookChapterAndTopic(this.selectedClass.classid,SubjectID).subscribe((data:any)=>{
      this.bookList = data.book;
      this.chapterList = data.chapter;
      this.topicList = data.topic;      
    });
  }

  onBookSelect(bookid:number){
    this.tocService.setBookId(bookid, true);
    this.filteredChapter = this.chapterList.filter((chapter:any)=>{
      if(chapter.bookid == bookid) {
        return true;
      }
      return false;
    });
  }

  getTopics(chapterId:number) {
    this.filteredTopic = this.topicList.filter((topic:any)=>{
      if(topic.chapterid == chapterId) {
        return true
      }
      return false;
    });
    return this.filteredTopic;
  }

  filterClass(event:any){
    let filtered : any[] = [];
    let query = event.query;

    if(this.classList.length) {
      for(let i = 0; i < this.classList.length; i++) {
          let classes:any = this.classList[i];
          if (classes.classname.toLowerCase().indexOf(query.toLowerCase()) == 0) {
              filtered.push(classes);
          }
      }
    }
    this.filteredClass = filtered;
  }

  filterSubject(event:any) {
    let filtered : any[] = [];
    let query = event.query;

    if (this.subjectList.length) {
      for(let i = 0; i < this.subjectList.length; i++) {
          let subject = this.subjectList[i];
          if (subject.SubjectName.toLowerCase().indexOf(query.toLowerCase()) == 0) {
              filtered.push(subject);
          }
      }
    }
    this.filteredSubject = filtered;
  }

  filterBook(event:any) {
    let filtered : any[] = [];
    let query = event.query;

    if (this.bookList.length) {
      for(let i = 0; i < this.bookList.length; i++) {
          let book = this.bookList[i];
          if (book.bookname.toLowerCase().indexOf(query.toLowerCase()) == 0) {
              filtered.push(book);
          }
      }
    }
    this.filteredBooks = filtered;
  }

  navigateTocontent(topicId:number) {
    //this.lmsSession.setSession(LMSSessionName.TOPIC_ID, 1);
    this.tocService.setTopicId(1);
    this.router.navigateByUrl('/content');
  }

}


