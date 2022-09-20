import "../styles/globals.scss";
import theme from "../styles/theme";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
