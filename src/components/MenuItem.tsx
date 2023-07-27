import Link from "next/link";
import React from "react";

interface MenuItemProps {
  title: string;
  address: string;
  Icon: any;
}

const MenuItem = ({ title, address, Icon }: MenuItemProps) => {
  return (
    <div>
      <Link href={address} className="mx-4 lg:mx-6 hover:text-amber-600 block">
        <Icon className="text-2xl sm:hidden" />
        <p className="hidden sm:inline my-2 text-sm uppercase">{title}</p>
      </Link>
    </div>
  );
};

export default MenuItem;
