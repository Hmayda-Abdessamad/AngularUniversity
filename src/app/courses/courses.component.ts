import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {COURSES} from "../../db-data";
import {CourseCardComponent} from "../course-card/course-card.component";
import {Course} from "../model/course";

@Component({
  selector: 'courses',
  standalone: true,
    imports: [CommonModule, CourseCardComponent],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {

  courses:Course[]=COURSES;


  onCourseSelected(course:Course) {
    console.log("we can view the "+course.description+"from the parent componant");
  }
}
