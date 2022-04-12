import React from "react";
import Link from "next/link";

export default function Nav() {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-logo">
          <Link href={"/"}>
            <a rel="canonical">YMWCompany</a>
          </Link>
        </div>
        <div className="navbar-menu"></div>
      </nav>
    </div>
  );
}
