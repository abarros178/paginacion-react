import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#3D3C42",
    },
    secondary: {
      main: "#7F5283",
    },
    background: {
      main: "#A6D1E6",
      secondary: "#EEEEEE",
    },
    error: {
      main: red.A400,
    },
  },
});
