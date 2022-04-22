import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React, { useState } from "react";

function Speed() {
  const [value, setValue] = useState(1);

  const handleChange = (e) => setValue(e.target.value);

  return (
    <FormControl>
      <FormLabel id="demo-controlled-radio-buttons-group">Speed</FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel value="1" control={<Radio />} label="1.0X" />
        <FormControlLabel value="1.5" control={<Radio />} label="1.5X" />
        <FormControlLabel value="2" control={<Radio />} label="2.0X" />
      </RadioGroup>
    </FormControl>
  );
}

export default Speed;
