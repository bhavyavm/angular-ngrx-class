import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { Student } from "./../models/student.model";
import { StudentState } from "./../app.state";

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  students: Observable<Student[]>;
  constructor(private store: Store<StudentState>) {}

  ngOnInit() {
    this.students = this.store.select("students");
  }
}