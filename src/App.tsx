import React, { useEffect } from "react";

import TaskList from "components/TaskList";
import "App.scss";
import api from "utils/api";

const App: React.FC = () => {
  const sendDate = async () => {
    try {
      const response = await api.post("/user.json", { name: "marklar" });
      console.log(response);
    } catch (e) {
      console.error(e);
    }
  };

  const getData = async () => {
    try {
      const response = await api.get("/user.json");
      console.log("get", response);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    sendDate();
    getData();
  }, []);

  return (
    <div className="App">
      <TaskList />
    </div>
  );
};

export default App;
