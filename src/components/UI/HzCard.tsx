/* eslint-disable prettier/prettier */
import styled from "@emotion/styled";
import { Card } from "@mui/material";
import theme from "../../styles/theme";

const HzCard = styled(Card)({
  borderRadius: "5px",
  padding: "1.25rem",
  border: "1px solid " + theme.palette.secondary.light,
  fontSize: "1rem",
  fontWeight: "400",
  lineHeight: "1.5",
  color: theme.palette.secondary.dark,
  backgroundColor: theme.palette.secondary.contrastText,
  // boxShadow: "none"
});

export default HzCard;
