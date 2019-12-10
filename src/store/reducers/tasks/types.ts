export interface Task {
  id: string;
  name: string;
  isComplete: boolean;
  createdAt: string;
}

export type Tasks = Task[];

export enum TasksActionTypes {
  ADD_TASK_REQUEST = "@@tasks/ADD_TASK_REQUEST",
  ADD_TASK_SUCCESS = "@@tasks/ADD_TASK_SUCCESS",
  UPDATE_TASK_REQUEST = "@@tasks/UPDATE_TASK_REQUEST",
  UPDATE_TASK_SUCCESS = "@@tasks/UPDATE_TASK_SUCCESS"
}
