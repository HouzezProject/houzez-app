/* eslint-disable prettier/prettier */
import styled from "@emotion/styled";
import { Container } from "@mui/material";
import theme from "../../styles/theme";

const HzContainer = styled(Container)({
  width: "100%",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: theme.palette.secondary.contrastText
});

export default HzContainer;
