import {Component, EventEmitter, Input, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Course} from "../model/course";

@Component({
  selector: 'course-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent {

  @Input({required:true})
  course:Course;
  @Output()
  courseEdit=new EventEmitter<Course>()

  editCourse(description:string) {
    this.courseEdit.emit({...this.course,description})
  }

  CardClasses(){
    if(this.course.category.toLowerCase()=="beginner"){
      return 'beginner';
    }
  }

}
