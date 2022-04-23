import React, { useState } from "react";
import timeConvert from "../functions/timeConvert";

function Clock({ numberForm }) {
  const [clock, setClock] = useState();
  let min = parseInt(numberForm, 10);
  let time = timeConvert(min);

  return time <= 0 ? 0 : <h1>{time}</h1>;
}

export default Clock;
