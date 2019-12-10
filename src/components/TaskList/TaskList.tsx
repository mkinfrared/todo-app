import React from "react";

import Paginator from "components/Paginator";
import TaskForm from "components/TaskForm";
import Task from "components/Task";
import css from "components/TaskList/TaskList.module.scss";

const TaskList: React.FC = () => {
  return (
    <div className={css.TaskList}>
      <h1>Задачи</h1>
      <Task />
      <TaskForm />
      <Paginator />
    </div>
  );
};

export default TaskList;
