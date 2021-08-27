import { React, useState } from "react";
import "./App.css";
import UserContext from "./context/userContext";
import HomePage from "./components/HomePage";
import { Route, Switch } from "react-router-dom";
import TaskPage from "./components/TaskPage";

function App() {
  const [user] = useState("");
  return (
    <UserContext.Provider value={user}>
      <Switch>
        <Route path="/taskPage" component={TaskPage}></Route>
        <Route path="/" exact component={HomePage}></Route>
      </Switch>
    </UserContext.Provider>
  );
}

export default App;
