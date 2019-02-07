import React from "react";
import { Grid, Card, Segment } from "semantic-ui-react";
import { Redirect } from "react-router-dom";
import { TransactionCard } from "./TransactionCard";
import {
  initEnquiry,
  getTransactions,
  getTotal,
  getCategories
} from "./EnquireLogic";
import { Loading } from "../../Loading";
import { Header } from "../../header";
import { EnquireCard } from "./EnquireCard";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = { transactions: null, total: 0, categories: [], pic: "" };
    this.display = initEnquiry(this.props.match.params.date);
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
    if (!this.display) return <Redirect to="/" />;
    else if (this.state.transactions)
      return (
        <Segment
          padded
          basic
          style={{ width: "60%", left: "20%", top: "5%", position: "absolute" }}
        >
          <Header />
          <Grid container>
            <Grid.Column>
              <EnquireCard />
              <Card fluid>
                <Card.Content>
                  <Card.Header>總共收入 {this.state.total} 元</Card.Header>
                  {this.state.transactions[0] ? (
                    <Card.Description>
                      {new Date(this.props.match.params.date).toDateString()}{" "}
                      負責人：
                      {this.state.transactions[0].pic}
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
        </Segment>
      );
    else return <Loading />;
  }
}
