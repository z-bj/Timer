import { Button } from "@mui/material";
import React from "react";
import Clock from "./Clock";
import PauseResume from "./PauseResume";
import Speed from "./Speed";

function Display({ numberForm }) {
  return (
    <>
      <Button variant="contained">Start</Button>
      <Clock numberForm={numberForm} />
      <PauseResume />
      <Speed />
    </>
  );
}

export default Display;
