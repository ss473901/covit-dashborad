import React from "react";
import "./App.css";
import Cards from "./features/covid/Cards/Cards";
import Chart from "./features/covid/Chart/Chart";

function App() {
  return (
    <div className="App">
      <Cards />
      <Chart />
    </div>
  );
}

export default App;
