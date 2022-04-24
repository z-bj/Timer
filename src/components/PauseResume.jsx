import { Button, ButtonGroup } from "@mui/material";
import React from "react";

function PauseResume() {
  return (
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
      <Button color="secondary">Pause</Button>
      <Button>Resume</Button>
    </ButtonGroup>
  );
}

export default PauseResume;
