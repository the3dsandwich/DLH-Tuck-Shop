import React from "react";
import { Button, Card, Dropdown } from "semantic-ui-react";
import { Link } from "react-router-dom";
import firebase from "../firebase";

class EnquireCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: "", redirect: false, dateOptions: [] };
    this.dateItems();
  }

  dateItems = () =>
    firebase.ref("Transaction").once("value", snap => {
      snap.forEach(t =>
        this.setState({
          dateOptions: [
            { id: t.key, value: t.key, text: t.key },
            ...this.state.dateOptions
          ]
        })
      );
    });

  render() {
    return (
      <Card fluid>
        <Card.Content>
          <Card.Header>看日期</Card.Header>
        </Card.Content>

        <Card.Content extra>
          <Dropdown
            fluid
            search
            selection
            placeholder="yyyy-mm-dd"
            options={this.state.dateOptions}
            onChange={e => this.setState({ date: e.target.id })}
          />
        </Card.Content>

        <Link to={"/enquire/" + this.state.date}>
          <Button fluid onClick={this.handleClick}>
            Enquire
          </Button>
        </Link>
      </Card>
    );
  }
}

export { EnquireCard };
