import { combineReducers } from "redux";

import tasks from "store/reducers/tasks/reducer";

const reducers = combineReducers({
  tasks
});

export default reducers;
