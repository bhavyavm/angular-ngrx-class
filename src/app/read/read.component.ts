import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { Student } from "./../models/student.model";
import { StudentState } from "./../app.state";

@Component({
  selector: "app-read",
  templateUrl: "./read.component.html",
  styleUrls: ["./read.component.css"]
})
export class ReadComponent implements OnInit {
  students: Observable<Student[]>;
  constructor(private store: Store<StudentState>) {}

  ngOnInit() {
    this.students = this.store.select("students");
  }
}
