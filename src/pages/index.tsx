import type { NextPage } from "next";
import { DialogTitle } from "@mui/material";

const Home: NextPage = () => {
  return (
    <DialogTitle>
      This is where we start to develop our frontend.
      <a href="/signup">&nbsp;&nbsp;&nbsp;&gt;&gt;&nbsp;&nbsp;Sign up</a>
    </DialogTitle>
  );
};

export default Home;
