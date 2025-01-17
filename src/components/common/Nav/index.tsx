import React from "react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/utils";
import { LargeDeviceNav } from "./LargeDeviceNav";
import { MobileNav } from "./MobileNav";

interface Props extends React.ComponentProps<"nav"> {}

export const Nav = ({ className, ...props }: Props) => {
  return (
    <nav
      {...props}
      className={cn(
        "flex items-center justify-between py-10 container",
        className
      )}
    >
      <Link to="/">
      <img
  src="/logo.png"
  alt="Corcus Studio Logo"
  className="h-20 w-auto"
/>
      </Link>
      <LargeDeviceNav className="hidden lg:flex" />
      <MobileNav className="lg:hidden" />
    </nav>
  );
};
