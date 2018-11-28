import React, { Component } from "react";
import { Segment, Container } from "semantic-ui-react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: "Active"
    };
  }

  render() {
    return (
      <Segment inverted>
        <Container textAlign="center">
          <p>小賣入帳系統 | 2018浪紫回頭</p>
        </Container>
      </Segment>
    );
  }
}
