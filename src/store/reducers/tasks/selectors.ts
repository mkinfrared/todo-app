import { createSelector } from "reselect";

import { AppState } from "store/store.type";

const getTasks = (state: AppState) => state.tasks;

const getTasksSelector = createSelector(getTasks, tasks =>
  Object.entries(tasks)
);

const getTask = (state: AppState, id: string) => {
  const entries = Object.entries(state.tasks);
  const task = entries.find(entry => entry[1].id === id);

  return task;
};

const getTaskSelector = createSelector(getTask, task => task);

export { getTasksSelector, getTaskSelector, getTask };
