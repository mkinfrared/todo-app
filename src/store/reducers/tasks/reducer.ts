import { Reducer } from "redux";

import { Tasks } from "store/reducers/tasks/types";

const initialState: Tasks = [{ id: "1", isComplete: false, name: "markalr" }];

const reducer: Reducer<Tasks> = (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    default:
      return state;
  }
};

export default reducer;
