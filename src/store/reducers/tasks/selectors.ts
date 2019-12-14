import { createSelector } from "reselect";

import { AppState } from "store/store.type";

const getTasks = (state: AppState) => state.tasks;

const getTasksSelector = createSelector(getTasks, tasks =>
  Object.entries(tasks)
);

const findTask = (state: AppState, id: string) => {
  const entries = Object.entries(state.tasks);
  const task = entries.find(entry => entry[1].id === id);

  return task;
};

const findTaskSelector = createSelector(findTask, task => task);

const getTask = (state: AppState, firebaseId: string) =>
  state.tasks[firebaseId];

const getTaskSelector = createSelector(getTask, task => task);

export { getTasksSelector, findTaskSelector, getTaskSelector };
