import { TextField } from "@mui/material";
import React from "react";

function Form({ dataForm, handleChange }) {
  return (
    <>
      <TextField
        inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
        value={dataForm}
        onChange={handleChange}
        placeholder="    Enter a # of minutes   "
      />
    </>
  );
}

export default Form;
