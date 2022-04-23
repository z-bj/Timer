import React from "react";
import timeConvert from "./timeConvert";

function Clock({ numberForm }) {
  let min = parseInt(numberForm, 10);
  let time = timeConvert(min);

  return <h1>{time}</h1>;
}

export default Clock;
