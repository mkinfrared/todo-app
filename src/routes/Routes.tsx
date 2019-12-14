import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";

import TaskEditForm from "components/TaskEditForm";
import TaskList from "components/TaskList";
import { getTasksSelector } from "store/reducers/tasks/selectors";

const Routes: React.FC = () => {
  const entries = useSelector(getTasksSelector);

  if (!entries.length) {
    return <Redirect to="/tasks/1" />;
  }

  return (
    <Switch>
      <Route path="/tasks/:page" component={TaskList} />
      <Route path="/edit/:firebaseId" component={TaskEditForm} />
      <Redirect to="/tasks/1" />
    </Switch>
  );
};

export default Routes;
