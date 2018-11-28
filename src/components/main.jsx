import React, { Component } from "react";
import { Segment } from "semantic-ui-react";
import firebase from "./firebase";
import Items from "./Items/Items";
import Transactions from "./Transactions/Transactions";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.firebase = firebase;
  }

  render() {
    return (
      <Segment padded id="app_main">
        <Items firebase={this.firebase} id={this.props.match.params.id} />
        <Transactions />
      </Segment>
    );
  }
}
