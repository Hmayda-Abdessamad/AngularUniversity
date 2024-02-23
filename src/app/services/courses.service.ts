import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Course} from '../model/course';
import {environment} from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {



  constructor(private http:HttpClient) { }


  public getCourses(page:string,pageSize:string):Observable<Course[]>{
    let params=new HttpParams().set("page",page).set("pageSize",pageSize);
    return this.http.get<Course[]>(environment.backendURL+"/courses",{params:params});
  }

  public saveCourse(course:Course):Observable<Course>{

    let headers=new HttpHeaders().set("X-Auth","userId")
    return this.http.put<Course>(environment.backendURL+"/courses/"+course.id,course,{headers});
  }


}
