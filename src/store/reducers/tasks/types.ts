export interface Task {
  id: string;
  name: string;
  isComplete: boolean;
  createdAt: string;
}

export interface Tasks {
  [key: string]: Task;
}

export enum TasksActionTypes {
  ADD_TASK_REQUEST = "@@tasks/ADD_TASK_REQUEST",
  ADD_TASK_SUCCESS = "@@tasks/ADD_TASK_SUCCESS",
  UPDATE_TASK_REQUEST = "@@tasks/UPDATE_TASK_REQUEST",
  UPDATE_TASK_SUCCESS = "@@tasks/UPDATE_TASK_SUCCESS",
  FETCH_TASK_REQUEST = "@@tasks/FETCH_TASK_REQUEST",
  FETCH_TASK_SUCCESS = "@@tasks/FETCH_TASK_SUCCESS",
  MAKE_TASK_COMPLETE_REQUEST = "@@tasks/MAKE_TASK_COMPLETE_REQUEST",
  MAKE_TASK_COMPLETE_SUCCESS = "@@tasks/MAKE_TASK_COMPLETE_SUCCESS",
  DELETE_TASK_REQUEST = "@@tasks/DELETE_TASK_REQUEST",
  DELETE_TASK_SUCCESS = "@@tasks/DELETE_TASK_SUCCESS"
}
