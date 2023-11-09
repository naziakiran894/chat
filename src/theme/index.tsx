import palette from "./palette";
import { typography } from "./typography";
import { createTheme, ThemeOptions } from "@mui/material/styles";

export default createTheme({
  palette,
  typography,
  components: {
    MuiToolbar: {
      styleOverrides: {
        regular: {
          "@media (min-width: 600px)": {
            paddingLeft: "5px",
            paddingRight: "25px",
          },
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 850,
      lg: 1200,
      xl: 1536,
    },
  },
} as ThemeOptions);
