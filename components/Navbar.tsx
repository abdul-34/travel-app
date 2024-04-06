import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container relative py-5">
      <Link href={"/"}>
        <Image src={"/hilink-logo.svg"} alt="logo" width={74} height={29} />
      </Link>
      <ul className="hidden lg:flex gap-12">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.key}
            href={link.href}
            className="regular-16 text-gray-50 hover:font-bold p-1.5"
          >
            {link.label}
          </Link>
        ))}
      </ul>
      <div className="hidden lg:flexCenter">
        <Button
          type="button"
          title="login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>
      <div className="flexCenter lg:hidden">
        <Image src={"/menu.svg"} alt="menu" width={32} height={32} />
      </div>
    </nav>
  );
};

export default Navbar;
