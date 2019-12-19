import React from "react";
import { DataContext, ChannelContext } from "./App";

const ComponentF = () => {
  return (
    <div>
      <h1>Component F</h1>
      <DataContext.Consumer>
        {dataFromApp => {
          return (
            <ChannelContext.Consumer>
              {channel => {
                return (
                  <>
                    <div>DataContext: {dataFromApp}</div>
                    <div>Channel name from Chanell Context: {channel}</div>
                  </>
                );
              }}
            </ChannelContext.Consumer>
          );
        }}
      </DataContext.Consumer>
    </div>
  );
};

export default ComponentF;
