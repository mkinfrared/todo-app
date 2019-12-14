import { action } from "typesafe-actions";

import { Task, Tasks, TasksActionTypes } from "store/reducers/tasks/types";

const addTask = (task: Task) => action(TasksActionTypes.ADD_TASK_REQUEST, task);

const addTaskSuccess = (task: Task) =>
  action(TasksActionTypes.ADD_TASK_SUCCESS, task);

const fetchTasks = () => action(TasksActionTypes.FETCH_TASK_REQUEST);

const fetchTasksSuccess = (tasks: Tasks) =>
  action(TasksActionTypes.FETCH_TASK_SUCCESS, tasks);

const makeTaskComplete = (id: string) =>
  action(TasksActionTypes.MAKE_TASK_COMPLETE_REQUEST, id);

const editTask = (firebaseId: string, name: string, isComplete: boolean) =>
  action(TasksActionTypes.UPDATE_TASK_REQUEST, {
    firebaseId,
    name,
    isComplete
  });

const editTaskSuccess = (firebaseId: string, task: Task) =>
  action(TasksActionTypes.UPDATE_TASK_SUCCESS, { firebaseId, ...task });

export {
  addTask,
  addTaskSuccess,
  fetchTasks,
  fetchTasksSuccess,
  makeTaskComplete,
  editTask,
  editTaskSuccess
};
