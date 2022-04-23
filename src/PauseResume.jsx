import { Button, ButtonGroup } from "@mui/material";
import React from "react";

function PauseResume() {
  return (
    <ButtonGroup letiant="contained" aria-label="outlined primary button group">
      <Button>Pause</Button>
      <Button>Resume</Button>
    </ButtonGroup>
  );
}

export default PauseResume;
