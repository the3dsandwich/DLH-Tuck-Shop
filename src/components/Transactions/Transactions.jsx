import React from "react";
import { Grid, Card } from "semantic-ui-react";
import { TransactionCard } from "./TransactionCard";
import { getTransactions, getTotal, getCategories } from "./TransactionLogic";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = { transactions: null, total: 0, categories: [] };

    setInterval(
      () =>
        this.setState({
          transactions: Object.values(getTransactions()),
          total: getTotal(),
          categories: getCategories()
        }),
      1000
    );
  }

  render() {
    return this.state.transactions ? (
      <Grid container>
        <Grid.Column>
          <Card fluid>
            <Card.Content>
              <Card.Header>
                今天總共收入
                {this.state.total} 元
              </Card.Header>
              {this.state.transactions[0] ? (
                <Card.Description>
                  {new Date().toDateString()} 負責人：
                  {this.props.id}
                </Card.Description>
              ) : null}
              <Card.Meta>
                熟食：
                {this.state.categories["熟食"]} 元 ｜零食：
                {this.state.categories["零食"]} 元 ｜飲品：
                {this.state.categories["飲品"]} 元 ｜減價：
                {this.state.categories["自帶碗"]} 元
              </Card.Meta>
            </Card.Content>
          </Card>
          {this.state.transactions
            .reverse()
            .map(trans => TransactionCard(trans))}
        </Grid.Column>
      </Grid>
    ) : null;
  }
}
