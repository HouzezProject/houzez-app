import React, { ReactElement } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

interface Props {
  href: string;
  children: ReactElement | string;
}

const NavLink = ({ children, href }: Props) => {
  if (typeof children === "string") {
    children = <a>{children}</a>;
  }
  const child = React.Children.only(children);
  const router = useRouter();

  return (
    <Link href={href}>
      {React.cloneElement(child, {
        "aria-current": router.pathname === href ? "page" : null
      })}
    </Link>
  );
};

export default NavLink;
