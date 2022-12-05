import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { McqRoutingModule } from './mcq-routing.module';
import { McqHomeComponent } from './mcq-home/mcq-home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { McqQuestionComponent } from './mcq-question/mcq-question.component';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    McqHomeComponent,
    McqQuestionComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatIconModule,
    McqRoutingModule
  ]
})
export class McqModule { }
