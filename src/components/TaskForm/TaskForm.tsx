import React from "react";

import css from "components/TaskForm/TaskForm.module.scss";

const TaskForm: React.FC = () => {
  return (
    <div className={css.TaskForm}>
      <textarea placeholder="Enter a title for this card" />
      <button>Add Card</button>
    </div>
  );
};

export default TaskForm;
