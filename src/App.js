import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./containers/Home/Home";
import { Route, Switch } from "react-router-dom";
import About from "./containers/About/About";
import Profile from "./containers/Profile/Profile";
import Alert from "./components/Alert/Alert";
import AlertState from "./context/Alert/AlertState";
import { GithubState } from "./context/Github/GithubState";

export default () => {
  return (
    <GithubState>
      <AlertState>
        <Navbar />
        <div className="container mt-5">
          <Alert alert={{ text: "Hello world" }} />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/profile/:name" component={Profile} />
          </Switch>
        </div>
      </AlertState>
    </GithubState>
  );
};
