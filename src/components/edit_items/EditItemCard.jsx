import React from "react";
import { Grid, Card, Input, Form, Button } from "semantic-ui-react";
import firebase from "../firebase";

const ItemCard = categories => (
  <Card fluid key={categories.name}>
    <Card.Content>
      <Card.Header>{categories.name}</Card.Header>
    </Card.Content>
    <Card.Content>
      <Grid container>
        {categories.items.map(item => (
          <Grid.Column
            mobile={16}
            tablet={8}
            computer={4}
            stretched
            key={item.name}
          >
            {ItemInput(item)}
          </Grid.Column>
        ))}
      </Grid>
    </Card.Content>
  </Card>
);

const ItemInput = item => {
  let name = item.name;
  let price = item.price;
  return (
    <Form
      onSubmit={() => {
        let update = { category: item.category, name: name, price: price };
        if (update.name && update.price) {
          //   firebase
          //     .ref("Items")
          //     .orderByChild("name")
          //     .equalTo(item.category)
          //     .once("value")
          //     .then(s => s);
        }
      }}
    >
      <Input placeholder={item.name} onChange={e => (name = e.target.value)} />
      <Input
        placeholder={item.price}
        onChange={e => (price = e.target.value)}
      />
      <Button type="submit">yay</Button>
    </Form>
  );
};

export { ItemCard };
