import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { TaskListParams } from "components/TaskList/TaskList.type";
import Paginator from "components/Paginator";
import TaskForm from "components/TaskForm";
import Task from "components/Task";
import css from "components/TaskList/TaskList.module.scss";
import { getTasksSelector } from "store/reducers/tasks/selectors";

const TaskList: React.FC = () => {
  const tasksEntries = useSelector(getTasksSelector);
  const { page } = useParams<TaskListParams>();
  const endIndex = +page * 10;
  const startIndex = endIndex - 10;

  const tasks = tasksEntries.slice(startIndex, endIndex).map(entry => {
    const [firebaseId, task] = entry;

    return (
      <Task
        key={task.id}
        id={task.id}
        firebaseId={firebaseId}
        name={task.name}
        isComplete={task.isComplete}
      />
    );
  });

  return (
    <div className={css.TaskList}>
      <h1>Tasks</h1>
      <TaskForm />
      {tasks}
      <Paginator />
    </div>
  );
};

export default TaskList;
