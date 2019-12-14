import { Reducer } from "redux";
import produce from "immer";

import { Tasks, TasksActionTypes } from "store/reducers/tasks/types";

const initialState: Tasks = {};

const reducer: Reducer<Tasks> = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case TasksActionTypes.ADD_TASK_SUCCESS:
      return { ...state, payload };
    case TasksActionTypes.FETCH_TASK_SUCCESS:
      return { ...payload };
    case TasksActionTypes.UPDATE_TASK_SUCCESS:
      return produce(state, draft => {
        const { firebaseId, ...props } = payload;
        draft[firebaseId] = { ...props };
      });
    case TasksActionTypes.DELETE_TASK_SUCCESS:
      return produce(state, draft => {
        const { firebaseId, ...props } = payload;
        draft[firebaseId] = { ...props };
      });
    default:
      return state;
  }
};

export default reducer;
