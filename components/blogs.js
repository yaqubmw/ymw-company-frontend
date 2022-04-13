import React from "react";
import Card from "./card";

const Blogs = ({ blogs }) => {

  return (
        <div className="">
          {blogs.map((blog, i) => {
            return (
              <Card blog={blog} key={blog.attributes.slug} />
            );
          })}
        </div>
  );
};

export default Blogs;
