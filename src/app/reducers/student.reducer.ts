import { Action } from "@ngrx/store";
import { Student } from "./../models/student.model";
import * as StudentActions from "./../actions/student.action";

const initialState: Student = {
  name: "sathvik",
  age: "2",
  subject: "English"
};

export function reducer(
  state: Student[] = [initialState],
  action: StudentActions.Actions
) {
  switch (action.type) {
    case StudentActions.ADD_STUDENT:
      return [...state, action.payload];
    case StudentActions.REMOVE_STUDENT:
      state.splice(action.payload, 1);
      return state;
    default:
      return state;
  }
}
