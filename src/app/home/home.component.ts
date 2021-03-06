import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';
import { COURSES } from '../model/db-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  beginnerCourses:Course[]; 
  advancedCourses:Course[]; 

  constructor() {
    
   }

  ngOnInit(): void {
    const courses = Object.values(COURSES);
     this.beginnerCourses = <Course[]> courses.filter((course : Course) => course.category === 'BEGINNER') ; 
     this.advancedCourses = <Course[]>courses.filter((course: Course) => course.category === 'ADVANCED'); 
  }

}
