import React from "react";
import Card from "./card";

const Blogs = ({ blogs }) => {
  const leftBlogsCount = Math.ceil(blogs.length / 5);
  const leftBlogs = blogs.slice(0, leftBlogsCount);
  const rightBlogs = blogs.slice(leftBlogsCount, blogs.length);

  return (
    <div>
      <div className="">
        <div>
          {leftBlogs.map((blog, i) => {
            return (
              <Card blog={blog} key={`blog__left__${blog.attributes.slug}`} />
            );
          })}
        </div>
        <div>
          <div className="">
            {rightBlogs.map((blog, i) => {
              return (
                <Card blog={blog} key={`blog__left__${blog.attributes.slug}`} />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
