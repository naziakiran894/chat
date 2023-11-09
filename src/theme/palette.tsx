/* eslint-disable import/no-anonymous-default-export */
const mode = "light";
export default {
  mode,
  ...(mode === "light"
    ? {
        primary: {
          warm: "#f05a28",
          contrastText: "#fff",
          main: "#dce5ea",
        },
        primary2: {
          main: "#ffe0b2",
          contrastText: "#fff",
          border: "rgba(229,221,213,1)",
        },
        secondary: {
          main: "#42a5f5",
          contrastText: "#ededed",
        },
        gray: {
          main: "#808080",
          contrastText: "#919EAB",
        },
        grey: {
          100: "#f7f8fa",
          200: "#f0f3f6",
          300: "#DFE3E8",
          400: "#C4CDD5",
          500: "#919EAB",
          600: "#637381",
          700: "#454F5B",
          800: "#212B36",
          900: "#161C24",
          1000: "#919eab52",
        },
        white: {
          main: "#fff",
          contrastText: "#fff",
        },
        success: {
          main: "#54D62C",
          contrastText: "#212B36",
        },
        error: {
          main: "#FF4842",
          contrastText: "#fff",
        },
        info: {
          main: "#1890FF",
          light: "#D0F2FF",
          contrastText: "#fff",
        },
        warning: {
          main: "#FFC107",
          contrastText: "#212B36",
        },
        background: {
          default: "rgb(255 255 255)",
          paper: "#fff",
          inbox: "#edf0f500",
        },
      }
    : {
        primary: {
          main: "#09A391",
          contrastText: "#fff",
        },
        grey: {
          100: "#F9FAFB",
          200: "#F4F6F8",
          300: "#DFE3E8",
          400: "#C4CDD5",
          500: "#919EAB",
          600: "#637381",
          700: "#454F5B",
          800: "#212B36",
          900: "#161C24",
          1000: "#919eab52",
        },
        success: {
          main: "#54D62C",
          contrastText: "#212B36",
        },
        error: {
          main: "#FF4842",
          contrastText: "#fff",
        },
        info: {
          main: "#1890FF",
          contrastText: "#fff",
        },
        warning: {
          main: "#FFC107",
          contrastText: "#212B36",
        },
        background: {
          default: "#151c20",
          paper: "#2b2f32",
        },
      }),
};
