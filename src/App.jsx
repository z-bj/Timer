import { useState } from "react";
import Form from "./Form";
import Display from "./Display";
import "./App.css";

function App() {
  const [numberForm, setNumberForm] = useState();
  const handleChange = (e) => setNumberForm(e.target.value);

  // useInterval(time, speed);

  return (
    <div className="App">
      <header className="App-header">
        <Form numberForm={numberForm} handleChange={handleChange} />
        <Display numberForm={numberForm} />
      </header>
    </div>
  );
}

export default App;
