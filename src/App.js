import React from "react";
import "./App.css";
import ComponentC from "./ComponentC";

export const DataContext = React.createContext();
export const ChannelContext = React.createContext();

const App = () => {
  const date = new Date();
  return (
    <div className="App">
      <DataContext.Provider
        value={"Data from App sendt true Provider. " + `${date}` + ""}
      >
        <ChannelContext.Provider value={"Chanel: Youtube.`"}>
          <ComponentC />
        </ChannelContext.Provider>
      </DataContext.Provider>
    </div>
  );
};

export default App;
