import React, { Component } from "react";
import { Card, Input, Button } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

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
      <Card
        style={{ width: "40%", top: "30%", left: "30%", position: "absolute" }}
      >
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

        <Button to={"/" + this.state.userInput} as={NavLink}>
          Submit
        </Button>
      </Card>
    );
  }
}
