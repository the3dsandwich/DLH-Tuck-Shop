import React from "react";
import { Segment, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Header = () => (
  <div
    style={{
      position: "fixed",
      width: "80%",
      top: "5%",
      height: "3em",
      zIndex: 20,
      backgroundColor: "white",
      top: 0,
      left: "10%"
    }}
  >
    <Link to="/">
      <Button fluid basic="text" color="blue">
        紫霞小賣入帳系統
      </Button>
    </Link>
  </div>
);

export { Header };
