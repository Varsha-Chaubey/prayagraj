"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
    className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Home"
          ></MenuItem>
        </Link>

        <MenuItem setActive={setActive} active={active} item="Famous Places">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="places">Sangam Ghat</HoveredLink>
            <HoveredLink href="places">Temples</HoveredLink>
            <HoveredLink href="places">Church</HoveredLink>
            <HoveredLink href="places">forts</HoveredLink>
            <HoveredLink href="places">Parks</HoveredLink>
            <HoveredLink href="places">Museum</HoveredLink>
            <HoveredLink href="places">Education</HoveredLink>
          </div>
        </MenuItem>
        <Link href={"/story"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Story"
          ></MenuItem>
        </Link>
      </Menu>
    </div>
  );
};

export default Navbar;
