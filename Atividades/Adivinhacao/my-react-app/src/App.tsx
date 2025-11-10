import React, { useState } from "react";
import "./App.css";
import { Button, Tip, Logo } from "./components";

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="Card">
        <Logo></Logo>
        <Tip></Tip>
      </div>
    </div>
  );
};

export default App;
