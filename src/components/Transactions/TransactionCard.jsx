import React from "react";
import { Card } from "semantic-ui-react";

const TransactionCard = transaction => (
  <Card fluid key={transaction.time}>
    <Card.Content>
      <Card.Header>
        總價：
        {transaction.total}
      </Card.Header>
      <Card.Description>
        {new Date(transaction.time).toLocaleTimeString()}
      </Card.Description>
      {transaction.bought.map(trans => (
        <Card.Meta key={Math.random().toString()}>
          {trans.name}：{trans.price}元
        </Card.Meta>
      ))}
    </Card.Content>
  </Card>
);

export { TransactionCard };
