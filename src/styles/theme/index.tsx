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
        light: "#e0e5e9",
        main: "#999",
        dark: "#212529",
        contrastText: "#fefefe",
      },
    }
});

export default theme;
