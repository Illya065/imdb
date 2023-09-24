"use client";

import Link from "next/link";
import React from "react";
import { useSearchParams } from "next/navigation";

interface NavbarItemProps {
  title: string;
  param: string;
}

const NavbarItem = ({ title, param }: NavbarItemProps) => {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");

  const isSelected = genre === param;

  return (
    <Link
      href={`/?genre=${param}`}
      className={`p-4 hover:text-amber-600 font-semibold m-4 ${
        isSelected &&
        "underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg"
      }`}
    >
      {title}
    </Link>
  );
};

export default NavbarItem;
