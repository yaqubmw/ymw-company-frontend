import React from "react";
import Link from "next/link";
import NextImage from "./image";

const Card = ({ blog }) => {
  return (
    <Link href={`/blog/${blog.attributes.slug}`}>
      <a className="uk-link-reset">
        <div className="uk-card uk-card-muted">
          <div className="uk-card-media-top">
            <NextImage image={blog.attributes.image} />
          </div>
          <div className="uk-card-body">
            <p id="category" className="category">
              {blog.attributes.label.data.attributes.label}
            </p>
            <p id="title" className="uk-text-large">
              {blog.attributes.title}
            </p>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Card;
