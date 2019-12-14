import React from "react";
import { useSelector } from "react-redux";

import Paginator from "components/Paginator";
import TaskForm from "components/TaskForm";
import Task from "components/Task";
import css from "components/TaskList/TaskList.module.scss";
import { getTasksSelector } from "store/reducers/tasks/selectors";

const TaskList: React.FC = () => {
  const tasksEntries = useSelector(getTasksSelector);

  const tasks = tasksEntries.map(entry => {
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
