import React from "react";
import "./App.css";
import Cards from "./features/covid/Cards/Cards";
import Chart from "./features/covid/Chart/Chart";
import PieChart from "./features/covid/PieChart/PieChart";

function App() {
  return (
    <div className="App">
      <Cards />
      <Chart />
      <PieChart />
    </div>
  );
}

export default App;
