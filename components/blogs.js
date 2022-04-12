import React from "react";
import Card from "./card";

const Blogs = ({ blogs }) => {
  const leftArticlesCount = Math.ceil(blogs.length / 5);
  const leftArticles = blogs.slice(0, leftArticlesCount);
  const rightArticles = blogs.slice(leftArticlesCount, blogs.length);

  return (
    <div>
      <div className="uk-child-width-1-2@s" data-uk-grid="true">
        <div>
          {leftArticles.map((blog, i) => {
            return (
              <Card
                blog={blog}
                key={`article__left__${blog.attributes.slug}`}
              />
            );
          })}
        </div>
        <div>
          <div className="uk-child-width-1-2@m uk-grid-match" data-uk-grid>
            {rightArticles.map((blog, i) => {
              return (
                <Card
                  blog={blog}
                  key={`article__left__${blog.attributes.slug}`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
