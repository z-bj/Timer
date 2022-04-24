import { useCallback, useState } from "react";
import Form from "./components/Form";
import Display from "./components/Display";
import "./App.css";
import useInterval from "use-interval";

function App() {
  const [, setTimer] = useState(0);
  const [dataForm, setNumberForm] = useState("");
  const [speed, setSpeed] = useState(1000);

  const handleChange = (e) => setNumberForm(e.target.value);

  // const rerender = useCallback(() => {
  //   setTimer((old) => old + 1);
  // }, [setTimer]);
  // useInterval(rerender, speed);

  return (
    <div className="App">
      <header className="App-header">
        <h3>Welcome 👋</h3>
        <Form dataForm={dataForm} handleChange={handleChange} />
        <Display dataForm={dataForm} speed={speed} setSpeed={setSpeed} />
      </header>
    </div>
  );
}

export default App;
