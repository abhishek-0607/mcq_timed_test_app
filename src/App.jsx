import { useState } from "react";
import "./App.css";
import { MainComp } from "./components/MainComp";
import { Scores } from "./components/Scores";
import { Time } from "./components/Time";

function App() {
  const [start, setStart] = useState(false);
  return (
    <div className="App">
      {/* <Time /> */}
      <MainComp />
    </div>
  );
}

export default App;
