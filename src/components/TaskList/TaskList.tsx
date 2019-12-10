import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Paginator from "components/Paginator";
import TaskForm from "components/TaskForm";
import Task from "components/Task";
import css from "components/TaskList/TaskList.module.scss";
import { fetchTasks } from "store/reducers/tasks/actions";
import getTaskSelector from "store/reducers/tasks/selectors";

const TaskList: React.FC = () => {
  const dispatch = useDispatch();
  const storeTasks = useSelector(getTaskSelector);

  useEffect(() => {
    dispatch(fetchTasks());
  }, []);

  const tasks = storeTasks.map(task => <Task key={task.id} name={task.name} />);

  return (
    <div className={css.TaskList}>
      <h1>Задачи</h1>
      {tasks}
      <TaskForm />
      <Paginator />
    </div>
  );
};

export default TaskList;
