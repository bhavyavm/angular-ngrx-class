import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { Student } from "./../models/student.model";
import { StudentState } from "./../app.state";

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
  students: Observable<Student[]>;
  constructor(private store: Store<StudentState>) {}

  ngOnInit() {
    this.students = this.store.select("students");
  }
}