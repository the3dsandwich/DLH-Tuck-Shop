import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import { ItemCard, NewItemCard } from "./ItemCard";
import CommitTransaction from "./CommitTransaction";

export default class Items extends Component {
  constructor(props) {
    super(props);
    this.state = { items: null };
    this.props.firebase
      .ref("Items")
      .once("value")
      .then(snap => this.setState({ items: snap.val() }));
  }

  render() {
    return this.state.items ? (
      <Grid container>
        {this.state.items.map(categories => (
          <Grid.Column computer={8} mobile={16} key={Math.random().toString()}>
            {ItemCard(categories)}
          </Grid.Column>
        ))}
        <Grid.Column computer={8} mobile={16}>
          <NewItemCard />
        </Grid.Column>
        <Grid.Column computer={8} mobile={16}>
          <CommitTransaction id={this.props.id} />
        </Grid.Column>
      </Grid>
    ) : null;
  }
}
