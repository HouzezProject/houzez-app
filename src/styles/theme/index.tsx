import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#3454d1",
      dark: "#002884",
      contrastText: "#fefefe"
    },
    secondary: {
      light: "#edeff0",
      main: "#c4c4c4",
      dark: "#212529",
      contrastText: "#fefefe"
    },
    red: {
      main: "#e4002a",
      dark: "#A81E35"
    },
    background: {
      default: "#edeff0",
      paper: "#fefefe"
    }
  }
});

declare module "@mui/material/styles" {
  interface Palette {
    red: Palette["primary"];
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    red?: PaletteOptions["primary"];
  }
}

export default theme;
