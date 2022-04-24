import React from "react";

function Clock({ dataForm }) {
  let n = parseInt(dataForm, 10);
  //convert the string from the input to a number
  let sec = n * 60;
  //sec-->nombre de sec contenu dans n.
  let num = n;
  let seconds = sec % 60;
  let hours = n / 60;
  let rhours = Math.floor(hours);
  let minutes = (hours - rhours) * 60;
  let rminutes = Math.round(minutes);

  return <h1>{`${rhours} : ${rminutes} : ${seconds}`}</h1>;
}

export default Clock;

// let rseconds = seconds < 10 ? "0" + seconds : seconds;
