import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { TextField } from "@mui/material";
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
  name,
  onChange,
  value,
  error,
  helperText,
}) {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <Box sx={{ textAlign: "center", alignItems: "center" }}>
      <div>
        <FormControl sx={{ m: 1, width: "296px" }}>
          {/* <InputLabel htmlFor='outlined-adornment-password'>
            {placeholder}
          </InputLabel> */}
          <MyComponent
            // id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            value={value}
            error={error && true}
            name={name}
            onChange={onChange}
            // label={placeholder}
            helperText={helperText}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword(!showPassword)}
                    // onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            label="Password"
          />
        </FormControl>
      </div>
    </Box>
  );
}
