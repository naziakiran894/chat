import * as React from "react";
import Box from "@mui/material/Box";
import { TextField } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import { styled } from "@mui/system";

const MyComponent = styled(TextField)({
  " & label.Mui-focused": {
    color: " #1D9BD6",
  },
  " &.MuiOutlinedInput-notchedOutline": {
    borderColor: " #1D9BD6",
  },
  "& .MuiOutlinedInput-root": {
    borderColor: "#1D9BD6",
    " & fieldset": {
      borderColor: " #1D9BD6",
    },
    " &.Mui-focused fieldset": {
      borderColor: " #1D9BD6",
    },
  },
});

export default function InputAdornments({
  type,
  name,
  id,
  placeholder,
  value,
  onChange,
  helperText,
  error,

}) {
  return (
    <Box>
      <div>
        <FormControl sx={{ m: 1, width: "296px" }}>
          <MyComponent
            error={error && true}
            id={id}
            type={type}
            value={value}
            onChange={onChange}
            name={name}
            label={placeholder}
            helperText={helperText}

          />
        </FormControl>
      </div>
    </Box>
  );
}
