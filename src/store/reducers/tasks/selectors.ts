import { createSelector } from "reselect";

import { AppState } from "store/store.type";

const getTasks = (state: AppState) => state.tasks;

const getTaskSelector = createSelector(getTasks, tasks => tasks);

export default getTaskSelector;
