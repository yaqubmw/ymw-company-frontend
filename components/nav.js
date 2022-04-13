import React from "react";
import Link from "next/link";

export default function Nav() {
  return (
    <div>
      <nav>
        <div className="navbar">
          <div className="navbar-logo">
            <Link href={"/"}>
              <a rel="canonical">YMWCompany</a>
            </Link>
          </div>
          <div className="navbar-menu">
            <Link href={"/blog"}>
              <a rel="canonical">Blog</a>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
