import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { Student } from "./../models/student.model";
import { AppState } from "./../app.state";
import * as StudentActions from "./../actions/student.action";

@Component({
  selector: "app-listing",
  templateUrl: "./listing.component.html",
  styleUrls: ["./listing.component.css"]
})
export class ListingComponent implements OnInit {
  students: Observable<Student[]>;
  constructor(private store: Store<AppState>) {
    this.students = this.store.select("student");
  }

  ngOnInit() {}

  removeStudent(index) {
    this.store.dispatch(new StudentActions.RemoveStudent(index));
  }
}
