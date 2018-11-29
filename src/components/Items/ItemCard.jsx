import React from "react";
import { Button, Grid, Card, Input } from "semantic-ui-react";
import { handleItemClick, handleNewItem } from "./ItemLogic";

const colors = {
  熟食: "orange",
  零食: "red",
  飲品: "twitter",
  自帶碗: "black"
};

const ItemCard = categories => (
  <Card fluid key={categories.name}>
    <Card.Content>
      <Card.Header>{categories.name}</Card.Header>
    </Card.Content>

    <Card.Content>
      <Grid container>
        {categories.items.map(item => (
          <Grid.Column mobile={8} computer={4} stretched key={item.name}>
            <Button
              fluid
              color={colors[categories.name]}
              size="large"
              animated="fade"
              onClick={() => handleItemClick(item)}
            >
              <Button.Content visible>{item.name}</Button.Content>
              <Button.Content hidden>$ {item.price}</Button.Content>
            </Button>
          </Grid.Column>
        ))}
      </Grid>
    </Card.Content>
  </Card>
);

class NewItemCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Card fluid>
        <Card.Content>
          <Card.Header>特殊商品</Card.Header>
        </Card.Content>
        <Card.Content>
          <Grid container>
            <Grid.Row>
              <Grid.Column mobile={4}>
                <Input
                  fluid
                  placeholder="名稱..."
                  onChange={e => this.setState({ name: e.target.value })}
                />
              </Grid.Column>
              <Grid.Column mobile={4}>
                <Input
                  fluid
                  placeholder="價錢..."
                  onChange={e => this.setState({ price: e.target.value })}
                />
              </Grid.Column>
              <Grid.Column mobile={4}>
                <Input
                  fluid
                  placeholder="數量..."
                  onChange={e => this.setState({ amount: e.target.value })}
                />
              </Grid.Column>
              <Grid.Column mobile={4}>
                <Button basic fluid onClick={() => handleNewItem(this.state)}>
                  Submit
                </Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Card.Content>
      </Card>
    );
  }
}

export { ItemCard, NewItemCard };
