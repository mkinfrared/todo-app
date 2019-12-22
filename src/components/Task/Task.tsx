import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import Delete from "icons/Delete";
import Done from "icons/Done";
import Edit from "icons/Edit";
import { TaskProp } from "components/Task/Task.type";
import css from "components/Task/Task.module.scss";
import { deleteTask, makeTaskComplete } from "store/reducers/tasks/actions";
import { getTaskSelector } from "store/reducers/tasks/selectors";
import { AppState } from "store/store.type";

const Task: React.FC<TaskProp> = ({ firebaseId }) => {
  const dispatch = useDispatch();
  const task = useSelector<AppState, ReturnType<typeof getTaskSelector>>(
    state => getTaskSelector(state, firebaseId)
  );
  const history = useHistory();

  const handleDoneClick = useCallback(() => {
    dispatch(makeTaskComplete(firebaseId));
  }, [dispatch, firebaseId]);

  const handleEditClick = useCallback(() => {
    history.push(`/edit/${firebaseId}`);
  }, [firebaseId, history]);

  const handleDeleteClick = useCallback(() => {
    dispatch(deleteTask(firebaseId));
  }, [dispatch, firebaseId]);

  return (
    <div className={`${task.isComplete ? css.complete : css.Task}`}>
      <p>{task.name}</p>
      <div>
        <div className={css.done} onClick={handleDoneClick}>
          <Done />
        </div>
        <div className={css.edit} onClick={handleEditClick}>
          <Edit />
        </div>
        <div className={css.delete} onClick={handleDeleteClick}>
          <Delete />
        </div>
      </div>
    </div>
  );
};

export default Task;
