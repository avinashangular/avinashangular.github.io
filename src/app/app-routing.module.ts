import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './core/content/content.component';
import { CourseComponent } from './core/course/course.component';
import { TableOfContentComponent } from './core/table-of-content/table-of-content.component';
import { ViewContentComponent } from './core/view-content/view-content.component';

const routes: Routes = [
  
  { path: '', redirectTo:'course', pathMatch:"full" },
  { path:'course', component: CourseComponent },
  { path: 'toc', component: TableOfContentComponent },
  { path: 'content', component: ContentComponent},
  { path: 'view-content', component: ViewContentComponent },
  { path: 'mcq', loadChildren: ()=> import('./modules/mcq/mcq.module').then(m => m.McqModule)},
  { path:'**', redirectTo:"course" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
