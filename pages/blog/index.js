import React from "react";
import Blogs from "../../components/blogs";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import { fetchAPI } from "../../lib/api";

const Blog = ({ blogs, labels, homepage }) => {
  return (
    <Layout>
      <Seo seo={homepage.attributes.seo} />
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <h1>{homepage.attributes.hero.title}</h1>
          <Blogs blogs={blogs} />
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const [blogsRes, labelsRes, homepageRes] = await Promise.all([
    fetchAPI("/blogs", { populate: ["image", "label"] }),
    fetchAPI("/labels", { populate: "*" }),
    fetchAPI("/homepage", {
      populate: {
        hero: "*",
        seo: { populate: "*" },
      },
    }),
  ]);

  return {
    props: {
      blogs: blogsRes.data,
      labels: labelsRes.data,
      homepage: homepageRes.data,
    },
    revalidate: 1,
  };
}

export default Blog;
