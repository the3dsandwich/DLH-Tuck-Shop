import React, { Component } from "react";
import firebase from "./firebase";
import Items from "./Items/Items";
import Transactions from "./Transactions/Transactions";
import { Header } from "../header";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.firebase = firebase;
  }

  render() {
    return (
      <div>
        <Header />
        <Items firebase={this.firebase} id={this.props.match.params.id} />
        <Transactions id={this.props.match.params.id} />
      </div>
    );
  }
}
