import { useState } from "react";
import Form from "./Form";
import "./App.css";
import Display from "./Display";
import PauseResume from "./PauseResume";
import Speed from "./Speed";
import Time from "./Time";

function App() {
  const [number, setNumber] = useState("");
  const handleChange = (e) => setNumber(e.target.value);

  return (
    <div className="App">
      <header className="App-header">
        <Form number={number} handleChange={handleChange} />
        <Time number={number} />
        <h1>{number}</h1>
        <Display />
        <PauseResume />
        <Speed />
      </header>
    </div>
  );
}

export default App;
