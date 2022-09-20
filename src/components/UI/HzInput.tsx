/* eslint-disable prettier/prettier */
import styled from "@emotion/styled";
import { Input } from "@mui/material";
import theme from "../../styles/theme";

const HzInput = styled(Input)({
  borderRadius: "5px",
  border: "1px solid " + theme.palette.secondary.light,
  fontSize: "1rem",
  fontWeight: "400",
  letterSpacing: "0.2rem",
  boxShadow: "none",
  paddingLeft: "10px"
});

export default HzInput;
