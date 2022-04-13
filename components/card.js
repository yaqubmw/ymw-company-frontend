import React from "react";
import Link from "next/link";
import Image from "./image";

const Card = ({ blog }) => {
  return (
    <div className="card">
      <Image className="card-img" image={blog.attributes.image} />
      <div className="card-text">
        <span id="label" className="card-label">
          {blog.attributes.label.data.attributes.name}
        </span>
        <Link href={`/blog/${blog.attributes.slug}`}>
          <a rel="canonical">
            <p id="title" className="card-title">
              {blog.attributes.title}
            </p>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Card;
