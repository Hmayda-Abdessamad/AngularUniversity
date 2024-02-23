import { Component } from '@angular/core';
import {AsyncPipe, CommonModule} from '@angular/common';
import {CourseCardComponent} from "../course-card/course-card.component";
import {Course} from "../model/course";
import {CoursesService} from '../services/courses.service';


@Component({
  selector: 'courses',
  standalone: true,
    imports: [CommonModule, CourseCardComponent,AsyncPipe],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {

  constructor(private coursesService:CoursesService) {


  }

  courses$=this.coursesService.getCourses("1","10")

  onCourseEdit(course:Course) {
   this.coursesService.saveCourse(course).subscribe()

  }







}
