import { action } from "typesafe-actions";

import { Task, TasksActionTypes } from "store/reducers/tasks/types";

const addTask = (task: Task) => action(TasksActionTypes.ADD_TASK_REQUEST, task);

const addTaskSuccess = (task: Task) =>
  action(TasksActionTypes.ADD_TASK_SUCCESS, task);

const fetchTasks = () => action(TasksActionTypes.FETCH_TASK_REQUEST);

const fetchTasksSuccess = () => action(TasksActionTypes.FETCH_TASK_SUCCESS);

export { addTask, addTaskSuccess, fetchTasks, fetchTasksSuccess };
