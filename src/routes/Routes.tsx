import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import TaskEditForm from "components/TaskEditForm";
import TaskList from "components/TaskList";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/tasks/:page" component={TaskList} />
      <Route path="/edit/:id" component={TaskEditForm} />
      <Redirect to="/tasks/1" />
    </Switch>
  );
};

export default Routes;
