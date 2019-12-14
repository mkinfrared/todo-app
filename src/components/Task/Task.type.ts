import { Task } from "store/reducers/tasks/types";

export interface TaskProp extends Omit<Task, "createdAt"> {
  firebaseId: string;
}
