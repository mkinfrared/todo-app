import { Reducer } from "redux";

import { Tasks, TasksActionTypes } from "store/reducers/tasks/types";

const initialState: Tasks = [];

const reducer: Reducer<Tasks> = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case TasksActionTypes.ADD_TASK_SUCCESS:
      return [...state, payload];
    default:
      return state;
  }
};

export default reducer;
