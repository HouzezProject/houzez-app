/* eslint-disable prettier/prettier */
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
      primary: {
        light: "#757ce8",
        main: "#3454d1",
        dark: "#002884",
        contrastText: "#fefefe",
      },
      secondary: {
        light: "#edeff0",
        main: "#c4c4c4",
        dark: "#212529",
        contrastText: "#fefefe",
      },
      error: {
        main: "#e4002a",
        dark: "#A81E35",
      },
    }
});

export default theme;
