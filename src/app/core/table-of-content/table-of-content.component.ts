import { Component, OnInit } from '@angular/core';
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
    private tocService: TocService
  ) { }

  ngOnInit(): void {
    this.tocService.getClassAndSubject(1).subscribe((data:any)=>{
      this.classList = data['ClassCollection'];
      this.subjectListMaster = data['Subject'];
    });
  }

  onClassSelect(event:any) {
   this.subjectList = this.subjectListMaster.filter((subject:any)=> {
      if(subject.ClassID == event.classid) {
        return true;
      }
      return false;
    });
  }

  onSubjectSelect(event:any) {
    this.tocService.getBookChapterAndTopic(this.selectedClass.classid,event.SubjectID).subscribe((data:any)=>{
      this.bookList = data.book;
      this.chapterList = data.chapter;
      this.topicList = data.topic;
    });
  }

  onBookSelect(event:any){
    this.filteredChapter = this.chapterList.filter((chapter:any)=>{
      if(chapter.bookid == event.bookid) {
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

    for(let i = 0; i < this.classList.length; i++) {
        let classes:any = this.classList[i];
        if (classes.classname.toLowerCase().indexOf(query.toLowerCase()) == 0) {
            filtered.push(classes);
        }
    }

    this.filteredClass = filtered;
  }

  filterSubject(event:any) {
    let filtered : any[] = [];
    let query = event.query;

    for(let i = 0; i < this.subjectList.length; i++) {
        let subject = this.subjectList[i];
        if (subject.SubjectName.toLowerCase().indexOf(query.toLowerCase()) == 0) {
            filtered.push(subject);
        }
    }

    this.filteredSubject = filtered;
  }

  filterBook(event:any) {
    let filtered : any[] = [];
    let query = event.query;

    for(let i = 0; i < this.bookList.length; i++) {
        let book = this.bookList[i];
        if (book.bookname.toLowerCase().indexOf(query.toLowerCase()) == 0) {
            filtered.push(book);
        }
    }

    this.filteredBooks = filtered;
  }

}


