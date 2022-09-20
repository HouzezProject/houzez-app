import type { NextPage } from "next";
import { DialogTitle } from "@mui/material";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <DialogTitle>
      This is where we start to develop our frontend.
      <Link href="/signup">
        <a>Sign up</a>
      </Link>
    </DialogTitle>
  );
};

export default Home;
