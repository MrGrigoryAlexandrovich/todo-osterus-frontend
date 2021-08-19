import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { Provider } from 'react-redux'
import store from './store'
import Todos from "./components/Todos";
import Create from "./components/Create";
import Edit from "./components/Edit";

import "./css/main.css";


class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Redirect to="/todos" />
            </Route>
            <Route path="/todos" exact>
              <Todos />
            </Route>
            <Route path="/todos/create">
              <Create />
            </Route>
            <Route path="/todos/edit/:id">
              <Edit />
            </Route>
          </Switch>
        </div>
      </Router>
      </Provider>
    );
  }
}

export default App;

