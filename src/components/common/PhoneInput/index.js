import { TextField } from "@mui/material";
import { forwardRef } from "react";

const PhoneInput = forwardRef((props, ref) => {
  return (
    <TextField
      id="standard-basic"
      variant="standard"
      inputRef={ref}
      {...props}
    />
  );
});

export default PhoneInput;
