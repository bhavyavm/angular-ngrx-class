import { Action, createReducer, on } from "@ngrx/store";
import { Student } from "./../models/student.model";
import * as StudentActions from "./../actions/student.action";

const initialState: Student = {
  name: "sathvik",
  age: 2,
  subject: "English"
};

const _studentReducer = createReducer(
  [initialState],
  on(StudentActions.AddStudent, (state, item) => {
    return [...state, item]
  }),
  on(StudentActions.RemoveStudent, (state, payload) => {
    state.splice(payload.index, 1);
    return state;
  })
);

export function studentReducer(state, action) {
  return _studentReducer(state, action);
}

// export function reducer(
//   state: Student[] = [initialState],
//   action: StudentActions.Actions
// ) {
//   switch (action.type) {
//     case StudentActions.ADD_STUDENT:
//       return [...state, action.payload];
//     case StudentActions.REMOVE_STUDENT:
//       state.splice(action.payload, 1);
//       return state;
//     default:
//       return state;
//   }
// }

// export function reducer(state: State | undefined, action: Action) {
//   return scoreboardReducer(state, action);
// }
