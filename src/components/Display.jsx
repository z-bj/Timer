import { Button } from "@mui/material";
import React from "react";
import Clock from "./Clock";
import PauseResume from "./PauseResume";
import RadioSpeed from "./RadioSpeed";

function Display({ dataForm, speed, setSpeed }) {
  return (
    <>
      <Clock dataForm={dataForm} />
      <Button variant="contained" color="success" size="large">
        Start
      </Button>
      <PauseResume />
      <RadioSpeed speed={speed} setSpeed={setSpeed} />
    </>
  );
}

export default Display;

// Display 2 digits
// rhours = rhours < 10 ? "0" + rhours : rhours;
// rminutes = rminutes < 10 ? "0" + rminutes : rminutes;
// rsecondes = rsecondes < 10 ? "0" + rsecondes : rsecondes;

// return rhours + ":" + rminutes + ":" + rsecondes;

//prevent the display of NaN or negative numbers
// if (!min || min < 0) {
//   return;
// }

// return time <= 0 ? <h1>00:00:00</h1> : <h1>{time}</h1>;
