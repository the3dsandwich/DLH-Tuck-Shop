import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "./components/main";
import Login from "./components/Login";
import EnquireTransaction from "./components/Transactions/EnquireTransaction";
import EditItems from "./components/edit_items/EditItems";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/console/:id" component={Main} />
          <Route exact path="/enquire/:date" component={EnquireTransaction} />
          <Route exact path="/edit" component={EditItems} />
          <Route component={Login} />
        </Switch>
      </BrowserRouter>
    );
  }
}
