import { Reducer } from "redux";

import { Tasks } from "store/reducers/tasks/types";

const initialState: Tasks = [];

const reducer: Reducer<Tasks> = (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    default:
      return state;
  }
};

export default reducer;
