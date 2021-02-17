import React from "react";
import { Switch, Route } from "react-router-dom";

import Teams from "./views/Teams";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Teams} />
      </Switch>
    </div>
  );
}

export default App;
