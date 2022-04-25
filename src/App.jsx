import { useCallback, useState } from "react";
import Form from "./components/Form";
import Clock from "./components/Clock";
import RadioSpeed from "./components/RadioSpeed";
import "./App.css";

function App() {
  const [dataForm, setNumberForm] = useState("");
  const [speed, setSpeed] = useState(1000);
  const handleChange = (e) => setNumberForm(e.target.value);

  return (
    <div className="App">
      <header className="App-header">
        <h3>Countdown</h3>
        <Form dataForm={dataForm} handleChange={handleChange} />
        <Clock dataForm={dataForm} speed={speed} />
        <RadioSpeed speed={speed} setSpeed={setSpeed} />
      </header>
    </div>
  );
}

export default App;
