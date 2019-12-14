import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Paginator from "components/Paginator";
import TaskForm from "components/TaskForm";
import Task from "components/Task";
import css from "components/TaskList/TaskList.module.scss";
import { fetchTasks } from "store/reducers/tasks/actions";
import { getTasksSelector } from "store/reducers/tasks/selectors";

const TaskList: React.FC = () => {
  const dispatch = useDispatch();
  const tasksEntries = useSelector(getTasksSelector);

  useEffect(() => {
    dispatch(fetchTasks());
  }, []);

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
