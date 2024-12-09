"use client";

import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link href="/">
        <Image
          className="logo"
          src="/Brahmin.png"
          alt="Brahmin logo"
          width={50}
          height={50}
        />
      </Link>
      <ul>
        <li className="link-item">
          <Link href="/" className="link">
            Home
          </Link>
        </li>
        <li className="link-item">
          <Link href="/aboutus" className="link">
            About Us
          </Link>
        </li>
        <li className="link-item">
          <Link href="/menu" className="link">
            Menu
          </Link>
        </li>
        <li className="link-item">
          <Link href="/reservation" className="link">
            Reservations
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
