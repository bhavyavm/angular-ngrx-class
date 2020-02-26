import { Injectable } from "@angular/core";
import { createAction, props } from "@ngrx/store";
import { Student } from "./../models/student.model";



export const AddStudent = createAction(
  "[STUDENT] Add",
  props<{ name: string; age: number; subject: string }>()
);

export const RemoveStudent = createAction(
  "[STUDENT] Remove"
);

//using class

// export const ADD_STUDENT = "[STUDENT] Add";
// export const REMOVE_STUDENT = "[STUDENT] Remove";


// export class AddStudent implements Action {
//   readonly type = ADD_STUDENT;
//   constructor(public payload: Student) {}
// }
// export class RemoveStudent implements Action {
//   readonly type = REMOVE_STUDENT;
//   constructor(public payload: number) {}
// }

// export type Actions = AddStudent | RemoveStudent;
