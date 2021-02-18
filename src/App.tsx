import React from "react";
import { Switch, Route } from "react-router-dom";

import Teams from "./views/Teams";
import Team from "./views/Team";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Teams} />
        <Route exact path="/teams/:id" component={Team} />
      </Switch>
    </div>
  );
}

export default App;
