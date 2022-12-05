import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { McqHomeComponent } from './mcq-home/mcq-home.component';
import { McqQuestionComponent } from './mcq-question/mcq-question.component';

const routes: Routes = [
  { path:'', component: McqHomeComponent },
  { path:'question', component: McqQuestionComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class McqRoutingModule { }
