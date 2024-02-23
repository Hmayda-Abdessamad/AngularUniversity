import { Component } from '@angular/core';
import {AsyncPipe, CommonModule} from '@angular/common';
import {CourseCardComponent} from "../course-card/course-card.component";
import {Course} from "../model/course";
import {first} from "rxjs/operators";
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment.prod';
import {Observable} from 'rxjs';

@Component({
  selector: 'courses',
  standalone: true,
    imports: [CommonModule, CourseCardComponent,AsyncPipe],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {

  params:HttpParams=new HttpParams().set("page","1").set("pageSize","10");

  courses$:Observable<Course[]>=this.http.get<Course[]>(environment.backendURL+"/courses",{params:this.params});



  constructor(private http:HttpClient) {
  }


  onCourseSelected(course:Course) {
    console.log("we can view the "+course.description+"from the parent componant");
  }

    protected readonly first = first;
}
