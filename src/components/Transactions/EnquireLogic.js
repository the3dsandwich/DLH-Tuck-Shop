import firebase from "../firebase";

let transactions = [];

const initEnquiry = date => {
  try {
    firebase
      .ref("Transaction")
      .child(new Date(date).toJSON().substr(0, 10))
      .once("value")
      .then(snap => (transactions = snap.val()));
    return true;
  } catch (error) {
    return false;
  }
};

const getTransactions = () => (transactions ? transactions : []);

const getTotal = () => {
  if (transactions) {
    let total = 0;
    Object.values(transactions).forEach(trans => {
      total += trans.total;
    });
    return total;
  } else return 0;
};

const getCategories = () => {
  if (transactions) {
    let categories = { 熟食: 0, 零食: 0, 飲品: 0, 自帶碗: 0 };
    Object.values(transactions).forEach(trans => {
      Object.keys(trans.amounts).forEach(
        cat => (categories[cat] = categories[cat] + trans.amounts[cat])
      );
    });
    return categories;
  } else return [];
};

const delTransaction = key => {
  firebase
    .ref("Transaction")
    .child(new Date().toJSON().substr(0, 10))
    .child(key)
    .set(null);
};

export {
  initEnquiry,
  getTransactions,
  getTotal,
  getCategories,
  delTransaction
};
