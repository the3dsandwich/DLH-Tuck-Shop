import React from "react";
import { Card, Button } from "semantic-ui-react";
import { delTransaction } from "./TransactionLogic";

const TransactionCard = transaction => (
  <Card fluid key={transaction.time}>
    <Card.Content>
      <Card.Header>
        總價：
        {transaction.total} 元
      </Card.Header>
    </Card.Content>
    <Card.Content>
      <Card.Description>
        {new Date(transaction.time).toLocaleTimeString()}
      </Card.Description>
      <Card.Meta>
        {transaction.bought.map(
          trans => trans.name + "：" + trans.price + " 元｜"
        )}
      </Card.Meta>
    </Card.Content>
    <Button fluid color="grey" onClick={() => delTransaction(transaction.key)}>
      Delete Transaction
    </Button>
  </Card>
);

export { TransactionCard };
