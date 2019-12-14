import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import Delete from "icons/Delete";
import Done from "icons/Done";
import Edit from "icons/Edit";
import { TaskProp } from "components/Task/Task.type";
import css from "components/Task/Task.module.scss";
import { deleteTask, makeTaskComplete } from "store/reducers/tasks/actions";

const Task: React.FC<TaskProp> = ({ id, name, isComplete, firebaseId }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleDoneClick = () => {
    dispatch(makeTaskComplete(id));
  };

  const handleEditClick = () => {
    history.push(`/edit/${firebaseId}`);
  };

  const handleDeleteClick = () => {
    dispatch(deleteTask(firebaseId));
  };

  return (
    <div className={`${isComplete ? css.complete : css.Task}`}>
      <p>{name}</p>
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
