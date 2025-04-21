"use client";
import React from "react";
import Link from "next/link";
import INavLinkProps from "./NavLink.types";
import { usePathname } from "next/navigation";

const NavLink = ({ label, href, icon }: INavLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  const linkClassName =
    "w-full flex items-center gap-2 py-2 px-4 text-lg text-gray-50 hover:text-rose-500 hover:pl-6 hover:border-l-4 hover:border-rose-500 rounded-r-full";
  const activeClassName =
    "border-l-4 border-rose-500 text-rose-500 font-semibold pl-6 bg-black/50";

  return (
    <Link
      href={href}
      className={`${linkClassName} ${isActive ? activeClassName : ""}`}
      style={{
        transition:
          "color 0.3s ease-in-out, background-color 0.3s ease-in-out, padding-left 0.3s ease-in-out",
      }}
    >
      {React.cloneElement(icon, { className: "w-5 h-5 shrink-0" })}
      <p>{label}</p>
    </Link>
  );
};

export default NavLink;
