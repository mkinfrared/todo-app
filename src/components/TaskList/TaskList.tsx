import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { TaskListParams } from "components/TaskList/TaskList.type";
import Paginator from "components/Paginator";
import TaskForm from "components/TaskForm";
import Task from "components/Task";
import css from "components/TaskList/TaskList.module.scss";
import { getTasksSelector } from "store/reducers/tasks/selectors";

const TaskList: React.FC = () => {
  const [sortAsc, setSortAsc] = useState(true);
  const tasksEntries = [...useSelector(getTasksSelector)];
  const { page } = useParams<TaskListParams>();
  const endIndex = +page * 10;
  const startIndex = endIndex - 10;

  if (!sortAsc) {
    tasksEntries.reverse();
  }

  const handleSortClick = () => {
    setSortAsc(prevState => !prevState);
  };

  const tasks = tasksEntries.slice(startIndex, endIndex).map(entry => {
    const [firebaseId] = entry;

    return <Task key={firebaseId} firebaseId={firebaseId} />;
  });

  return (
    <div className={css.TaskList}>
      <h1>Tasks</h1>
      <TaskForm />
      <button onClick={handleSortClick}>{sortAsc ? "Latest" : "Oldest"}</button>
      {tasks}
      <Paginator />
    </div>
  );
};

export default TaskList;
