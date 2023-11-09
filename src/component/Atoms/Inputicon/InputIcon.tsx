import * as React from "react";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import DoneIcon from "@mui/icons-material/Done";

c;

export default function InputAdornments() {
  const [values, setValues] = React.useState({
    amount: "",
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <Box>
      <div>
        <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-amount">amount</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type="text"
            value={values.amount}
            onChange={handleChange("amount")}
            endAdornment={
              <InputAdornment position="end">
                <DoneIcon />
              </InputAdornment>
            }
            label="amount"
          />
        </FormControl>
      </div>
    </Box>
  );
}
