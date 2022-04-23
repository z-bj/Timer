import { TextField } from "@mui/material";
import React from "react";

function Form({ numberForm, handleChange }) {
  return (
    <>
      <TextField
        inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
        value={numberForm}
        onChange={handleChange}
      />
    </>
  );
}

export default Form;
