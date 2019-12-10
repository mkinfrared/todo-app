import React from "react";

import TaskList from "components/TaskList";
import "App.scss";

const App: React.FC = () => {
  return (
    <div className="App">
      <TaskList />
    </div>
  );
};

export default App;
