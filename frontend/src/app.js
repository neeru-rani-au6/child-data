import React, { Component } from "react";
import Login from "./components/login";
import Child from "./components/child";
import State from "./components/state";
import District from "./components/district";
import Home from "./components/home";
import View from "./components/view";
import { HashRouter, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Route path="/" component={Login} exact />
        <Route path="/home" component={Home} exact />
        <Route path="/child" component={Child} exact />
        <Route path="/state" component={State} exact />
        <Route path="/view/:id" component={View} exact />
        <Route path="/district" component={District} exact />
      </HashRouter>
    );
  }
}

export default App;
