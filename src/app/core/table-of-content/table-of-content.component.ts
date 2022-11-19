import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lms-table-of-content',
  templateUrl: './table-of-content.component.html',
  styleUrls: ['./table-of-content.component.css']
})
export class TableOfContentComponent implements OnInit {


  selectedClass:any;
  filteredClass:any[] = [];
  classList = [
    {
        "classid": 1,
        "classname": "Class 1",
        "classnumber": 1,
        "nextclass": 2
    },
    {
        "classid": 2,
        "classname": "Class 2",
        "classnumber": 2,
        "nextclass": 3
    }
  ]

  selectedSubject:any;
  filteredSubject:any[]=[];
  subjectList:any[]=[
    {
        "SubjectID": 9,
        "SubjectName": "Subject 1",
        "ClassID": 1,
        "SubjectIcon": "SubjectIcons/9.png"
    },
    {
        "SubjectID": 12,
        "SubjectName": "Subject 2",
        "ClassID": 1,
        "SubjectIcon": "SubjectIcons/12.png"
    }
  ];

  selectedBook:any;
  filteredBooks:any[]=[];
  bookList:any[]=[
    {
            "bookid": 5,
            "bookname": "The Grammar Tree",
            "bookyear": 2011,
            "bookimage": "bookimages/5.png"
        },
        {
            "bookid": 139,
            "bookname": "English_APS",
            "bookyear": 2013,
            "bookimage": "bookimages/139.png"
        }
    ]
    

  selectedCountryAdvanced: any[] = [];
  selectedCountry:any | undefined;
  filteredCountries: any[]= [];
  isDropdown:boolean = true;
  

  constructor() { }

  ngOnInit(): void {
  }

  filterClass(event:any){
    let filtered : any[] = [];
    let query = event.query;

    for(let i = 0; i < this.classList.length; i++) {
        let classes = this.classList[i];
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
