import React, { useState } from "react";
import { useDispatch } from "react-redux";
import uuid from "uuid/v4";

import { addTask } from "store/reducers/tasks/actions";
import { Task } from "store/reducers/tasks/types";
import css from "components/TaskForm/TaskForm.module.scss";

const TaskForm: React.FC = () => {
  const [inputText, setInputText] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(e.target.value);
  };

  const handleClick = () => {
    const task: Task = {
      id: uuid(),
      name: inputText,
      isComplete: false,
      createdAt: new Date().toLocaleString()
    };

    dispatch(addTask(task));
    setInputText("");
  };

  return (
    <div className={css.TaskForm}>
      <textarea
        placeholder="Enter a title for this card"
        onChange={handleChange}
        value={inputText}
      />
      <button onClick={handleClick}>Add Card</button>
    </div>
  );
};

export default TaskForm;
