import React from "react";
import { Button, Card } from "semantic-ui-react";
import {
  getTransaction,
  clearTransaction,
  commitTransaction
} from "./ItemLogic";

export default class CommitTransaction extends React.Component {
  constructor(props) {
    super(props);
    this.state = { transactions: getTransaction(this.props.id) };

    setInterval(
      () => this.setState({ transactions: getTransaction(this.props.id) }),
      1000
    );
  }

  render() {
    return (
      <Card fluid>
        <Button.Group fluid>
          <Button
            primary
            onClick={() => commitTransaction(this.state.transactions)}
          >
            Commit
          </Button>
          <Button secondary onClick={() => clearTransaction()}>
            Clear
          </Button>
        </Button.Group>
        <Card.Content>
          <Card.Header>
            總價：
            {this.state.transactions.total} 元
          </Card.Header>
          {this.state.transactions.bought.map(item => (
            <Card.Meta key={Math.random().toString()}>
              {item.name + "：" + item.price}元
            </Card.Meta>
          ))}
        </Card.Content>
      </Card>
    );
  }
}
