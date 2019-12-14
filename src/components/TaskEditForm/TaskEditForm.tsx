import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

import { TaskEditFormParams } from "components/TaskEditForm/TaskEditForm.type";
import { editTask } from "store/reducers/tasks/actions";
import { getTaskSelector } from "store/reducers/tasks/selectors";
import { AppState } from "store/store.type";
import css from "components/TaskEditForm/TaskEditForm.module.scss";

const TaskEditForm: React.FC = () => {
  const { firebaseId } = useParams<TaskEditFormParams>();
  const history = useHistory();
  const dispatch = useDispatch();
  const task = useSelector<AppState, ReturnType<typeof getTaskSelector>>(
    state => getTaskSelector(state, firebaseId)
  );

  const [taskName, setTaskName] = useState(task.name);
  const [isComplete, setIsComplete] = useState(task.isComplete);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskName(e.target.value);
  };

  const handleIsCompleteChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsComplete(e.target.checked);
  };

  const handleCancelClick = () => {
    history.goBack();
  };

  const handleSaveClick = () => {
    dispatch(editTask(firebaseId, taskName, isComplete));
    history.goBack();
  };

  return (
    <div className={css.TaskEditForm}>
      <div>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          value={taskName}
          onChange={handleNameChange}
        />
      </div>
      <div>
        <label htmlFor="isComplete">Is Complete: </label>
        <input
          type="checkbox"
          id="isComplete"
          checked={isComplete}
          onChange={handleIsCompleteChange}
        />
      </div>
      <div className={css.buttonGroup}>
        <button onClick={handleSaveClick}>Save</button>
        <button className={css.cancelButton} onClick={handleCancelClick}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default TaskEditForm;
