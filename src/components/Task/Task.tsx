import React from "react";

import { TaskProp } from "components/TaskList/Task.type";
import css from "components/Task/Task.module.scss";

const Task: React.FC<TaskProp> = ({ name }) => {
  return (
    <div className={css.Task}>
      <p>{name}</p>
    </div>
  );
};

export default Task;
