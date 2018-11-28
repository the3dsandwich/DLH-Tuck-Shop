import firebase from "../firebase";

let transactions = [];

firebase
  .ref("Transaction")
  .child(new Date().toJSON().substr(0, 10))
  .on("value", snap => (transactions = snap.val()));

const getTransactions = () => (transactions ? Object.values(transactions) : []);

const getTotal = () => {
  if (transactions) {
    let total = 0;
    Object.values(transactions).forEach(trans => {
      total += trans.total;
    });
    return total;
  } else return 0;
};

export { getTransactions, getTotal };
