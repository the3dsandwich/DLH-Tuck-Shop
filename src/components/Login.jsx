import React, { Component } from "react";
import { Card, Input, Button } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import { EnquireCard } from "./Transactions/EnquireCard";
import { Header } from "../header";

export default class UserInput extends Component {
  constructor(props) {
    super(props);
    let date = new Date();
    this.state = {
      date: {
        yyyy: date.getFullYear(),
        mm: date.getMonth() + 1,
        dd: date.getDate()
      }
    };
  }

  handleSearchChange = e => {
    this.setState({ userInput: e.target.value });
  };

  render() {
    return (
      <div
        style={{ width: "40%", top: "30%", left: "30%", position: "absolute" }}
      >
        <Header />
        <Card fluid>
          <Card.Content>
            <Card.Header>小賣入帳系統</Card.Header>
            <Card.Meta>
              {"今天是" +
                this.state.date.yyyy +
                "年" +
                this.state.date.mm +
                "月" +
                this.state.date.dd +
                "日"}
            </Card.Meta>
          </Card.Content>

          <Card.Content extra>
            <Input
              fluid
              icon="search"
              placeholder="輸入名字..."
              onChange={this.handleSearchChange}
            />
          </Card.Content>

          <Button to={"/console/" + this.state.userInput} as={NavLink}>
            Submit
          </Button>
        </Card>
        <EnquireCard />
      </div>
    );
  }
}
