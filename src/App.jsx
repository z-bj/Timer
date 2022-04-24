import { useState } from "react";
import Form from "./components/Form";
import Clock from "./components/Clock";
import RadioSpeed from "./components/RadioSpeed";
import "./App.css";

function App() {
  const [dataForm, setDataForm] = useState(0);
  const [speed, setSpeed] = useState(1000);

  const handleChange = (e) => setDataForm(e.target.value);

  return (
    <div className="App">
      <header className="App-header">
        <h3>Countdown</h3>
        <Form dataForm={dataForm} handleChange={handleChange} />
        <hr />
        <Clock dataForm={dataForm} speed={speed} />
        <RadioSpeed speed={speed} setSpeed={setSpeed} />
      </header>
    </div>
  );
}

export default App;
