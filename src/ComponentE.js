import React, { useContext } from "react";
import ComponentF from "./ComponentF";
import { DataContext, ChannelContext } from "./App";

const ComponentE = () => {
  const data = useContext(DataContext);
  const channel = useContext(ChannelContext);
  return (
    <div>
      {/* <ComponentF /> */}
      <h1>Component E</h1>
      Data from DataContext : {data} <br />
      Channel from ChannelContext: {channel}
    </div>
  );
};

export default ComponentE;
