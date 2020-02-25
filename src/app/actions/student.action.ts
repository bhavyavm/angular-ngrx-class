import { Injectable } from "@angular/core";
import { Action } from "@ngrx/store";
import { Student } from "./../models/student.model";

export const ADD_STUDENT = "[STUDENT] Add";
export const REMOVE_STUDENT = "[STUDENT] Remove";

export class AddStudent implements Action {
  readonly type = ADD_STUDENT;
  constructor(public payload: Student) {}
}

export class RemoveStudent implements Action {
  readonly type = REMOVE_STUDENT;
  constructor(public payload: number) {}
}

export type Actions = AddStudent | RemoveStudent;
