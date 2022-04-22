import React from "react";
import useInterval from "use-interval";

let minutes = parseInt(number / 60, 10);
let secondes = parseInt(number % 60, 10);

function Time({ number }) {
  let time = number;

  function decreaseTime(time) {
    time--;
  }

  const rerender = useCallback(() => {
    decreaseTime(time);
  }, [time]);

  useInterval(rerender, 1000);

  return <div>Time</div>;
}

export default Time;
