import React from "react";
import { Segment, Dimmer, Loader } from "semantic-ui-react";

const Loading = () => (
  <Segment
    padded
    basic
    style={{ height: "100%", width: "100%", position: "absolute" }}
  >
    <Dimmer active>
      <Loader />
    </Dimmer>
  </Segment>
);

export { Loading };
