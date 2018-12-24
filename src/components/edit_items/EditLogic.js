import firebase from "../firebase";

let items = [];

const initEdit = that => {
  console.log(that.setState);
  firebase
    .ref("Items")
    .once("value")
    .then(snap => that.setState({ item: snap.val() }));
};

const getItems = () => {
  return items;
};

export { initEdit, getItems };
