import React from "react";
import { Grid, Card, Segment } from "semantic-ui-react";
import { ItemCard } from "./EditItemCard";
import firebase from "../firebase";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [] };
    firebase
      .ref("Items")
      .once("value")
      .then(snap => this.setState({ items: snap.val() }));
  }

  render() {
    return this.state.items ? (
      <Segment basic padded>
        <Grid container>
          <Grid.Column mobile={16}>
            <Card fluid>
              <Card.Content>
                <Card.Header>更改物品！</Card.Header>
              </Card.Content>
            </Card>
          </Grid.Column>
          {this.state.items.map(categories => (
            <Grid.Column
              computer={8}
              mobile={16}
              key={Math.random().toString()}
            >
              {ItemCard(categories)}
            </Grid.Column>
          ))}
        </Grid>
      </Segment>
    ) : null;
  }
}
