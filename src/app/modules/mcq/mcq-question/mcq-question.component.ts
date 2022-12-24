import { Component, OnInit } from '@angular/core';
import { MCQService } from '../mcq.service';

@Component({
  selector: 'lms-mcq-question',
  templateUrl: './mcq-question.component.html',
  styleUrls: ['./mcq-question.component.css']
})
export class McqQuestionComponent implements OnInit {

  questions:any[]=[];
  currentQuestion:any = {};
  currentQuestionIndex:number = 0;

  constructor(
    private mcqService: MCQService
  ) { }

  async ngOnInit(): Promise<void> {
    await this.getTestQuestions();
   
  }

  getTestQuestions() {
    this.mcqService.getTestByIdWithAnswer(1).subscribe((questions:any)=>{
      this.questions = questions.questions.map((question:any)=>{       
        let _question = {...question};
        _question['options'] = questions.answers.filter((option:any)=>{
          if(option.qid == question.qid) {
            return true
          }
          return false;
        });
        return _question;
      });
      this.getQuestionByIndex(this.currentQuestionIndex);  
    });
  }

  changeQuestion(stepName:'pre'|'next') {
    debugger;
    if(stepName == 'pre') {
      this.currentQuestionIndex > 0 ? this.currentQuestionIndex-- : this.currentQuestionIndex;     
    } else if(stepName == 'next') {
      this.currentQuestionIndex < this.questions.length - 1 ? this.currentQuestionIndex++ : this.currentQuestionIndex;      
    }
    this.getQuestionByIndex(this.currentQuestionIndex);
  }

  getQuestionByIndex(index:number) {
    this.currentQuestion = this.questions && this.questions.length ? this.questions[index] : {};
  }

}
