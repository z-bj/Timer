import { Button } from "@mui/material";
import { useState } from "react";
import useInterval from "use-interval";

const Clock = ({ dataForm, speed }) => {
  //---------------Type formatting---------------------------
  const numbMin = parseInt(dataForm, 10);

  //------------------Time converting-------------------------

  // let seconds = (numbMin * 60) % 60;
  // let hours = numbMin / 60;
  // let rhours = Math.floor(hours);
  // let minutes = (hours - rhours) * 60;
  // let rminutes = Math.round(minutes);

  //-----------------useInterval------------------------------

  // The counter
  let [count, setCount] = useState(0);

  // ON/OFF
  const [isPlaying, setPlaying] = useState(false);

  useInterval(
    () => {
      // Your custom logic here
      setCount(count + 1);
    },
    isPlaying ? speed : null
  ); // passing null instead of 1000 will cancel the interval if it is already running

  //-----------Conditional rendering 00:00:00-----------

  // let rhours00 = rhours < 10 ? "0" + rhours : rhours;
  // let rminutes00 = rminutes < 10 ? "0" + rminutes : rminutes;
  // let rseconds00 = seconds < 10 ? "0" + seconds : seconds;

  //----------------------log-----------------------------

  // console.log(`value of numbMin: ${numbMin}`);
  // console.log(`value of time: ${time}`);

  return (
    <>
      <Button
        onClick={() => setPlaying(!isPlaying)}
        variant={isPlaying ? "outlined" : "contained"}
        color={isPlaying ? "error" : "success"}
        size="large"
      >
        {isPlaying ? "||" : "START"}
      </Button>

      <h1>{count}</h1>
    </>
  );
};

export default Clock;

// return (
//   <>
//     <h1>{`${rhours00} : ${rminutes00} : ${rseconds00}`}</h1>
//   </>
// );

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
