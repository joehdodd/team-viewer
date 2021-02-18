import React from "react";
import { Switch, Route } from "react-router-dom";

import Teams from "./views/Teams";
import Team from "./views/Team";
import Users from "./views/Users";
import User from "./views/User";

import NavBar from "./components/NavBar";
import BigNav from "./components/BigNav";

import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="app-views-container">
        <Switch>
          <Route exact path="/" component={BigNav} />
          <Route exact path="/teams" component={Teams} />
          <Route exact path="/teams/:id" component={Team} />
          <Route exact path="/users" component={Users} />
          <Route exact path="/users/:id" component={User}/>
        </Switch>
      </div>
    </div>
  );
}

export default App;
