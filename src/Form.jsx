import { Button, TextField } from "@mui/material";
import React from "react";

function Form({ number, handleChange }) {
  return (
    <>
      <TextField
        inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
        value={number}
        onChange={handleChange}
      />
      <Button variant="contained">Start</Button>
    </>
  );
}

export default Form;

/* <form>
  <label htmlFor="number">Fill a number of minutes:</label>
  <input
    id="number"
    type="text"
    inputMode="number"
    pattern="[0-9]*"
    name="number"
    min="1"
    max="60"
    value={number}
    onChange={handleChange}
  ></input>
  <input type="submit" value="Start" />
</form>; */
