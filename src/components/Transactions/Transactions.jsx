import React from "react";
import { Grid, Card } from "semantic-ui-react";
import { TransactionCard } from "./TransactionCard";
import { getTransactions, getTotal } from "./TransactionLogic";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = { transactions: null, total: 0 };

    setInterval(
      () =>
        this.setState({ transactions: getTransactions(), total: getTotal() }),
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
                {this.state.total}元
              </Card.Header>
              {this.state.transactions[0] ? (
                <Card.Description>
                  日期：
                  {this.state.transactions[0].time.substr(0, 10)} 負責人：
                  {this.state.transactions[0].pic}
                </Card.Description>
              ) : null}
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
