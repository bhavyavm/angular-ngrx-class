import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { Student } from "./../models/student.model";
import { StudentState } from "./../app.state";
import * as StudentActions from "./../actions/student.action";

@Component({
  selector: "app-add-student",
  templateUrl: "./add-student.component.html",
  styleUrls: ["./add-student.component.css"]
})
export class AddStudentComponent implements OnInit {
  students: Observable<Student[]>;
  constructor(private store: Store<StudentState>) {}

  ngOnInit() {}

  addStudent(name, age, subject) {
    this.store.dispatch(
      new StudentActions.AddStudent({ name: name, age: age, subject: subject })
    );
  }
}
