import React, { useEffect } from "react";

import logo from "./logo.svg";

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
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
